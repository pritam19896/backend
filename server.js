// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
var path = require('path')
var mongoose = require('mongoose');
var port = process.env.PORT || 7000;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
    limit: '50mb',
    extended: true
}));
app.use(express.json({
    limit: '50mb'
}));
// parse application/json
app.use(bodyParser.json())
app.use(cors())


app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'uploads')));


 var index = require('./src/routes/index.js')(app)

app.get('/', (req, res) => {
    res.status(200).json({
        Message: "Welcome to server project !",
        ip: req.connection.remoteAddress + " ip address " + req.headers['x-forwarded-for']
    })
});

//----------------Connection with Mongo Db server-------------------------------------------------------
mongoose.connect("mongodb://localhost:27017/das", { useNewUrlParser: true }, (err) => {
    // mongoose.connect("mongodb://127.0.0.1:4322/destimoney", { useNewUrlParser: true }, (err) => {//working
    if (!err)
        console.log("Connected to mongodb");
});


app.listen(port);
console.log('Api is running on port: '+ port);