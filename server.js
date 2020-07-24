const express = require('express');
const connectDB = require('./config/connection');
const path = require('path');
const cors = require('cors')
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

connectDB();


app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))

//import routes here


//Postman test
app.get('/',(req,res) => {
    res.send('API runnning')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on 5000'))




