const test = require("../components/baseComponent/testRoute.js");
// const user = require('../components/baseComponent/testRoute')

module.exports = app => {
  app.use("/test",test)

  // app.use("/test", test);
};

