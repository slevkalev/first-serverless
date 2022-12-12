require("dotenv").config()
const mysql = require("mysql2/promise")

exports.handler = async function () {
  const connection = await mysql.createConnection(process.env.DATABASE_URL)
  const sql = "SELECT * FROM `golfers`"
  const [rows] = await connection.execute(sql)

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: rows,
    }),
  }
}
