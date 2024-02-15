const mongoose = require('mongoose');
require("dotenv").config()


const getConnecitonURL =()=>{
    let connectionURL ;
    if (process.env.NODE_ENV ='development') {
        connectionURL = process.env.DATABASE_LOCAL;
        connectionURL = connectionURL.replace('<username>',process.env.DATA_USER)
        connectionURL = connectionURL.replace('<password>',process.env.DATA_PASS)
    }else{
        connectionURL = process.env.DATABASE_DEPLOY;
    }
    return connectionURL;
}

const connectionDB =async()=>{
    console.log('database connecting...');
    const mongodbURL = getConnecitonURL();
    await mongoose.connect(mongodbURL,{dbName:process.env.DATABSE_NAME})
    console.log('connected to database');
}

module.exports = connectionDB;