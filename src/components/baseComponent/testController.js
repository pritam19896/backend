const userModel = require("./testModel");
let testController = {};

testController.signUp = (req, res) => {
  return res.json(200, {
    msg: "Inside test api"
  });
};

testController.demo = (req, res) => {
  res.send("Hello demo func...");
};

testController.getuserdata = (req, res, next) => {
  userModel.find().then(response => {
    console.log(response);
    res.status(200).send({ response: response });
  });
};

// testController.post = (req, res, next) => {
//   console.log(req.body)
//   // testModel.insert().then(response => {
//   //   console.log(response);
//     res.status(200).send({ req: req.body });
//   // });
// };

//price: req.body.price

testController.postuserdata = (req, res, next) => {
  let product = new userModel({
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  });
  product.save((err) => {
    if (err) res.json(err);
    else{
      res.send("succefully data send");
    } 
  });
 };

//  testController.getuserdata = (req,res,next) =>{
//  console.log(res.body);
// }

module.exports = testController;
