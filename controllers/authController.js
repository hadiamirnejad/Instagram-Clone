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

class AuthController extends controller {
  async getCookieById(id) {}

  async loginForm(req, res, next) {
    console.log(config.IS_USERAUTHENTICATE,'vgbgbgbgfgnfgnfgnfgn');
    if (config.IS_USERAUTHENTICATE){
      return res.redirect("/");
    }
    else {
      return res.render("auth/signin");
    }
  }

  async login(req, res, next) {
    let query = `Select * from tbl_user where mobile='${req.body.mobile}'`;
    let [user, _] = await db.execute(query);

    if (user[0] && sha256(req.body.password) == user[0].password) {
      const hashedId = sha256(user[0].id.toString());
      let d = new Date();
      let yyyy = d.getUTCFullYear();
      let mm = d.getUTCMonth() + 1;
      let dd = d.getUTCDate();
      let h = d.getUTCHours();
      let m = d.getUTCMinutes();
      let s = d.getUTCSeconds();

      query = `INSERT INTO tbl_session(hashuserid,userid,logindate)VALUES('${hashedId}',${user[0].id},'${yyyy}-${mm}-${dd} ${h}:${m}:${s}');`;
      const ss = await db.execute(query);

      res.cookie("connectedId", hashedId, {
        maxAge: 5 * 60 * 60 * 1000,
        httpOnly: true,
      });
      config.IS_USERAUTHENTICATE = true;
      res.redirect("/dashboard");
    } else {
      res.redirect("/auth/login");
    }
  }
}

module.exports = new AuthController();
