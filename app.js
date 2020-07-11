var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
mongose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Wordl!");
});

app.use(router);

app.listen(3000, () => {
    console.log("Node server runnoing on localhost:3000");

});