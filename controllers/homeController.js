const controller = require("./controller");

class homeController extends controller {
  static index(req, res) {
    console.log("test");
  }
}

module.exports = new homeController();
