const sql = require("mysql2");
const db = require("../config/db");
const Controller = require("../controllers/controller");

class Session{
  constructor(hashUserId, userId) {
    this.hashUserId = hashUserId;
    this.userId = userId;
  }
  static getConnectedUserId(connectedId) {
    const query = `Select * from tbl_Session where hashuserid='${connectedId}' order by id desc LIMIT 1`;
    return db.execute(query);
  }
}

module.exports = Session;
