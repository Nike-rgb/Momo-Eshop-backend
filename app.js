const express = require('express');
const session = require('express-session');

//setting up the server
const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log('Server running on port ' + PORT);

//CORS config
app.use(require('./config/cors.config'));

//setting up the database connection 
require('./config/db.js')();

//parse json data
app.use(express.json());

//setting up the session
app.use(session({
    secret : "This is my secret which is not even that secret",
    saveUninitialized : true,
    resave : false,
    cookie : {httpOnly : true, sameSite : "none", maxAge : 1000 * 60 * 60}
}));

//setting up routes
app.use('/api/getMomos', require('./resources/routes/api/getMomo'));
app.use('/api/addMomoToCart', require('./resources/routes/api/addToCart'));
