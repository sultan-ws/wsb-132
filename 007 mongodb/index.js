const { MongoClient, ObjectId } = require('mongodb');

// const url = 'mongodb://localhost:27017';
const url = 'mongodb+srv://sultankhan:sj1XtNfoMKK1If1T@sultan.luvya.mongodb.net/?retryWrites=true&w=majority&appName=sultan';

const client = new MongoClient(url);

const connection = async () => {
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

const createUser = async () => {
    const { User } = await connection();

    const data = {
        name: 'janny Doe',
        age: 30,
        conatct: 'john@mail.com'
    };

    const response = await User.insertOne(data);
    console.log(response);
};

// createUser();

const readUsers = async () => {
    const { User } = await connection();
    const response = await User.find().toArray();
    console.log(response);
};

readUsers();

const updateUser = async () => {
    const { User } = await connection();
    const response = await User.updateOne(
        { _id: new ObjectId('6774d460b470cd7396ae2524') },
        {
            $unset: {
                age: '32',
            }
        }
    );


    // const response = await User.updateOne(
    //     { _id: new ObjectId('6774d460b470cd7396ae2524')},
    //     {
    //         $set:{
    //             age:32,
    //             conatct:'johnupdated@mail.com'
    //         }
    //     }
    // );

    console.log(response);
};

// updateUser();

const deleteUser = async ()=>{
    const { User } = await connection();
    const response = await User.deleteOne({_id: new ObjectId('6774d54c147c63200bbd38a5')});
    console.log(response);
};

// deleteUser();