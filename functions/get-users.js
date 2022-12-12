require("dotenv").config()
const mysql = require("mysql2")
const connection = mysql.createConnection(process.env.DATABASE_URL)

exports.handler = async function () {
  const sql = "SELECT * FROM `picks`"
  const qResponse = connection.query(sql, (err, results) => {
    if (err) {
      throw err
    }
    return results
  })
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: qResponse,
    }),
  }
}
