var mongoose = require("mongoose");
// Schema = mongoose.Schema;
module.exports = mongoose.model("posts", {
  // name: {
    first_name: { type: String },
    middle_name: { type: String },
    last_name: { type: String },
  // },
  email: { type: String },
  password: { type: String }
});
// "email": { type: String },
// "password": { type: String }

// var Nameschema = new mongoose.Schema({
//     first_name: { type: String },
//           middle_name: { type: String },
//           last_name: { type: String }
//     })

//     var Userschema = new mongoose.Schema({
//         name: {type: [Nameschema]},
//   email: { type: String },
//   password: { type: String }
// });

// module.exports = mongoose.model("posts", {
