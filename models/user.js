const db = require("../config/db");

class User {
  constructor(first_name, mobile, password, role, img, balance) {
    this.first_name = first_name;
    this.mobile = mobile;
    this.password = password;
    this.role = role;
    this.img = img;
    this.balance = balance;
  }
  save(id) {
    let d = new Date();
    let yyyy = d.getUTCFullYear();
    let mm = d.getUTCMonth() + 1;
    let dd = d.getUTCDate();
    let h = d.getUTCHours();
    let m = d.getUTCMinutes();
    let s = d.getUTCSeconds();

    let createdAtDate = `${yyyy}-${mm}-${dd} ${h}:${m}:${s}`;

    let insertSql = `
        INSERT INTO tbl_user(
            first_name,
            mobile,
            password,
            role,
            img,
            created_at
        )
        VALUES(
            '${this.first_name}',
            '${this.mobile}',
            '${this.password}',
            ${this.role},
            '${this.img}',
            '${createdAtDate}'
        )`;
    let updateSql = `
    UPDATE tbl_user SET
    first_name='${this.first_name}',
    mobile='${this.mobile}',
    password='${this.password}',
    role=${this.role},
    img='${this.img}',
    balance='${this.balance}',
    updated_at='${createdAtDate}'
    WHERE id=${id}
    `;
    if (id == null) return db.execute(insertSql);
    else return db.execute(updateSql);
  }

  static findAll() {
    let sql = "SELECT * FROM tbl_user";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM tbl_user WHERE id=${id}`;

    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM tbl_user WHERE id=${id}`;

    return db.execute(sql);
  }

  static findByMobile(mobile) {
    let sql = `SELECT * FROM tbl_user WHERE mobile='${mobile}'`;

    return db.execute(sql);
  }
}

module.exports = User;
