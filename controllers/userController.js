const { redirect } = require("statuses");
const sql = require("mysql2");
const db = require("../config/db");
const controller = require("./controller");
const crypto = require("crypto");
const config = require('../config/config')

function sha256(data) {
  return crypto.createHash("sha256").update(data, "binary").digest("base64");
  //                                               ------  binary: hash the byte string
}

class UserController extends controller {

  async getUserByMobile(mobile) {
    let query = `Select * from users where mobile='${mobile}'`;
    let [user, _] = await db.execute(query);
    return user[0];
  }
}

module.exports = new UserController();
