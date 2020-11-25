var express=require("express"); 
var bodyParser=require("body-parser"); 
var morgan = require('morgan')
const cors = require('cors')

const db = require('./db')
const productRouter = require('./routes/product-router')

const app=express() 

app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ 
	extended: true
})); 
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', productRouter)
 

app.listen(4242, () => {
    console.log('Serveur on listening on port 4242')
});
    