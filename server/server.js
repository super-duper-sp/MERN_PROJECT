// const express = require('express');
// const dotenv = require("dotenv").config();
// const bodyParser = require('body-parser');
// const  cors = require('cors');
// const connectDb = require("./config/dbConnection");


// connectDb();





// const app = express();


// const port = process.env.PORT || 3002;



// // Middleware
// app.use(bodyParser.json({extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());


// const apiRoute = require('./routes/API');

// app.use('/api',apiRoute)







app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
});