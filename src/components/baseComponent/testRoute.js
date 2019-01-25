var express = require('express');
var router = express.Router();


const testController = require("./testController.js")




router.get('/testing1', testController.signUp);

router.get('/testing2', testController.demo);

router.get('/getuserdata', testController.getuserdata);

router.post('/postuserdata', testController.postuserdata);



// router.post('/displayuserdata',testController.getuserdata);


// Return router
module.exports = router;

