import mysql from "mysql"

export const db = mysql.createConnection({
    host :"localhost",
    user: "root",
    password: "Knguyen2910",
    database: "networker"
})

