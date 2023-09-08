import mysql from "mysql"

export const db = mysql.createConnection({
    host :"18.118.200.86",
    user: "networker",
    password: "networker",
    database: "networker"
})

