const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const connection = async ()=>{
    await client.connect();
    const db = client.db('wsb_132_tmp');

    const User = db.collection('users');
    const Product = db.collection('products');
    const Blog = db.collection('blogs');

    return {
        User,
        Product,
        Blog
    }
};

const createUser = async ()=>{
    const {User} = await connection();
    
    const data = {
        name: 'John Doe',
        age: 30,
        conatct:'john@mail.com'
    };

    const response = await User.insertOne(data);
    console.log(response);
};

createUser();
