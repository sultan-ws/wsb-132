const express = require('express');
const token = 12345678;

const app = express();

const checkToken = (req, res, cb)=>{
    if(!req.params.key) return res.status(400).json({message:'please send a key'});
    if(req.params.key != token) return res.status(401).json({message: 'please send valid key'});
    cb();
}


app.get('/route1/:key?', checkToken, (req, res)=>{
    
    // if(!req.params.key) return res.status(400).json({message:'please send a key'});
    // if(req.params.key != token) return res.status(401).json({message: 'please send valid key'});
    res.status(200).json({ message:'Hello from route 1'});
});

app.get('/route2/:key?', checkToken, (req, res)=>{
    // if(!req.params.key) return res.status(400).json({message:'please send a key'});
    // if(req.params.key != token) return res.status(401).json({message: 'please send valid key'});
    res.status(200).json({ message:'Hello from route 2'});
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})