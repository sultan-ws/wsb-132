const express = require('express');

const app = express();

const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
const router4 = express.Router();

const m1 = (req, res, cb)=>{ console.log('m1'); cb();};
const m2 = (req, res, cb)=>{ console.log('m2'); cb();};
const m3 = (req, res, cb)=>{ console.log('m3'); cb();};
const m4 = (req, res, cb)=>{ console.log('m4'); cb();};
const m5 = (req, res, cb)=>{ console.log('m5'); cb();};

app.use(m1);
router1.use(m2);
router2.use(m3);
router3.use(m4);
router4.use(m5);

app.use('/t1', router1);
app.use('/t2', router2);
app.use('/t3', router3);
app.use('/t4' ,router4);

router1.get('/r1', (req, res)=>{ res.status(200).json({message:'route 1'}) });
router1.get('/r2', (req, res)=>{ res.status(200).json({message:'route 2'}) });
router1.get('/r3', (req, res)=>{ res.status(200).json({message:'route 3'}) });
router1.get('/r4', (req, res)=>{ res.status(200).json({message:'route 4'}) });
router1.get('/r5', (req, res)=>{ res.status(200).json({message:'route 5'}) });
router2.get('/r6', (req, res)=>{ res.status(200).json({message:'route 6'}) });
router2.get('/r7', (req, res)=>{ res.status(200).json({message:'route 7'}) });
router2.get('/r8', (req, res)=>{ res.status(200).json({message:'route 8'}) });
router2.get('/r9', (req, res)=>{ res.status(200).json({message:'route 9'}) });
router2.get('/r10', (req, res)=>{ res.status(200).json({message:'route 10'}) });
router3.get('/r11', (req, res)=>{ res.status(200).json({message:'route 11'}) });
router3.get('/r12', (req, res)=>{ res.status(200).json({message:'route 12'}) });
router3.get('/r13', (req, res)=>{ res.status(200).json({message:'route 13'}) });
router3.get('/r14', (req, res)=>{ res.status(200).json({message:'route 14'}) });
router3.get('/r15', (req, res)=>{ res.status(200).json({message:'route 15'}) });
router4.get('/r16', (req, res)=>{ res.status(200).json({message:'route 16'}) });
router4.get('/r17', (req, res)=>{ res.status(200).json({message:'route 17'}) });
router4.get('/r18', (req, res)=>{ res.status(200).json({message:'route 18'}) });
router4.get('/r19', (req, res)=>{ res.status(200).json({message:'route 19'}) });
router4.get('/r20', (req, res)=>{ res.status(200).json({message:'route 20'}) });




app.listen(4600, ()=>{
    console.log("Server is running on port 4600");
})