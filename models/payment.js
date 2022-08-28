const db = require("../config/db");

class Payment {
  constructor(userid, resnumber, amount, payment = 0) {
    this.userid = userid;
    this.resnumber = resnumber;
    this.amount = amount;
    this.payment = payment;
  }

  save(id) {
    let d = new Date();
    let yyyy = d.getUTCFullYear();
    let mm = d.getUTCMonth() + 1;
    let dd = d.getUTCDate();
    let h = d.getUTCHours();
    let m = d.getUTCMinutes();
    let s = d.getUTCSeconds();

    let paymentAtDate = `${yyyy}-${mm}-${dd} ${h}:${m}:${s}`;

    let insertSql = `
        INSERT INTO tbl_payment(
            userid,
            resnumber,
            amount,
            payment,
            paymentAtDate
        )
        VALUES(
            '${this.userid}',
            '${this.resnumber}',
            '${this.amount}',
            '${this.payment}',
            '${paymentAtDate}'
        )`;
    let updateSql = `
    UPDATE tbl_payment SET
    payment='${this.payment}',
    WHERE id=${id}
    `;
    if (id == null) return db.execute(insertSql);
    else return db.execute(updateSql);
  }

  static findByResnumber(resnumber){
    let sql = `SELECT * FROM tbl_payment WHERE resnumber=${resnumber}`;

    return db.execute(sql);
  }
}

module.exports = Payment;
