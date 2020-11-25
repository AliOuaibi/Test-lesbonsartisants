const Product = require('../models/product')

createProduct = (req, res) => {
    const body = req.body
    
    const myData = new Product(body);
        if (!myData) {
            return res.status(400).json({ success: false, error: err })
        }
    myData.save()
    .then(() => {
        res.status(200).json({
            success: true,
            id: myData._id,
            message: 'Product created!',});
    })
    .catch(err => {
        console.log(err,"error");
        res.status(400).send("unable to save to database");
    }); 
}

updateProduct = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({ success: false, error: err })
    }
    Product.findOne({ name: req.params.id}, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        product.name = body.name
        product.price = body.price
        product.warranty_years = body.warranty_years
        product.type = body.type
        product.rating = body.rating
        product.save()
        .then(() => {                                    
            res.status(200).send('Product updated!');
        })
    })
    .catch(error => {
        res.status(400).send("unable to save to database");
    })
}

getProductByName = async (req, res) => {
    var id = req.params.id
    await Product.findOne({ name: id }, (err, product) => {
        if (err) {
            // console.log(req.params,'teeeest');
            return res.status(400).json({ success: false, error: err })
        }
        if (!product) {
            return res.status(404).json({ success: false, error: `Product not found` })
        }
        return res.status(200).json({ success: true, data: product })
    }).catch(err => console.log(err))
}

getProduct = async (req, res) => { 
    await Product.find({}, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!product.length) {

            return res.status(404).json({ success: false, error: `Product not found` })
        }
        return res.status(200).json({ success: true, data: product })
    }).catch(err => console.log(err))
}
deleteProduct = async (req, res) => {
    await Product.findOneAndDelete({ name: req.params.id }, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        } 

        if (!product) {
            return res.status(404).json({ success: false, error: `Product not found` })
        }

        return res.status(200).json({ success: true, data: product})
    }).catch(err => console.log(err))
}


module.exports = {
    createProduct,
    updateProduct,
    getProductByName,
    getProduct,
    deleteProduct,
}