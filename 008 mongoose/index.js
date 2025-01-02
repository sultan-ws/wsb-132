const mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017/dbname'
const url = 'mongodb+srv://sultankhan:sj1XtNfoMKK1If1T@sultan.luvya.mongodb.net/?retryWrites=true&w=majority&appName=sultan';

mongoose.connect(url)
.then(()=>{
    console.log('databse connected....');
})
.catch((error)=>{
    console.log(error);
});

const  productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock:{
        type:Boolean,
        default:true
    },
    description:String
});

const Product = mongoose.model('products', productSchema);

const createData = async ()=>{
    const data = {
        name: 'product2',
        price: '2999',
        // inStock: false,
        description: 'product1 test'
    };

    const finalData = new Product(data);
    const response =await finalData.save();

    console.log(response);
};

// createData();

const readProducts = async()=>{
    const products = await Product.find();
    console.log(products);
};
readProducts();

const updateProducts = async()=>{
    const data = {
        name: 'product name updated',
        // price:'hello'
    };

    const response = await Product.updateOne(
        {_id: '67762142bcf4c3dd1d959f61'},
        {
            $set: data
        }
    );

    console.log(response);
};

// updateProducts();

const deleteProduct = async()=>{
    const response = await Product.deleteOne({_id: '677621020cea259dc2d396d9'});
    console.log(response);
}

// deleteProduct();