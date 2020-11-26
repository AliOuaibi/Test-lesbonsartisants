const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation } = require('../validation');
const { loginValidation } = require('../validation')

postRegister = async (req,res) => {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExist= await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    const salt = await bcrypt.genSalt(10);
    const hashdPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashdPassword,
    })
    try{
        const savedUSer = await user.save()
        res.send({ user: user.id });
    }catch(err){
        res.status(400).send(err)
    }
}

postLogin = async (req,res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is not found');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password');

    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
}

module.exports = {
    postRegister,
    postLogin
}