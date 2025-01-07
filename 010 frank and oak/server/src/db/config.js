const mongoose = require('mongoose');

const { DB_NAME, DB_USERNAME, DB_CLUSTER, DB_PASSWORD } = process.env;
const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=${DB_CLUSTER}`
mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    });