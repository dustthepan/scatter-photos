const mongoose = require('mongoose');
const config = require('config');
const { connect } = require('http2');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {useNewUrlParser: true});
        
        console.log('MongoDB connected')
    } catch(err) {
        
        console.log(err.message)

        //escape process with failure 
        process.exit(1);
    }
}

module.exports = connectDB