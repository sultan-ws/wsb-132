const express = require('express');
const masterRouter = require('./src/app');
require('dotenv').config();
require('./src/db/config');
const cors = require('cors');

const { PORT } = process.env;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', masterRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});