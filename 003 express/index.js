const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('home route');
});

app.get('/products', (req, res)=>{
    res.send('product list');
});

app.get('/users', (req, res)=>{
    res.send('users list');
});

app.post('/users', (req, res)=>{
    res.send('users list 02');
});

app.get('/greet', (req, res) => {
    console.log(req.query);
    res.send(`Hello, ${req.query.name}`);
});

app.post('/paramtest/:name/:age', express.json(), (req, res)=>{
    console.log(req.params);
    console.log(req.body);
    res.json({message:'params response'});
})

app.listen(4200, ()=>{
    console.log("Server is running on port 4200");
})