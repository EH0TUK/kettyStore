const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors())
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "kettyStore"
})

app.post("/register", (req, res) => {
    const userFullName = req.body.userFullName;
    const userEmail = req.body.userEmail;
    const userPhoneNumber = req.body.userPhoneNumber;
    const userUnpOrInn = req.body.userUnpOrInn;
    const userPassword = req.body.userPassword;
    const userCountry = req.body.userCountry;

    if (userFullName == '' || userEmail == '' || userPhoneNumber == '' || userUnpOrInn == '' || userPassword == '' || userCountry == '') return
    db.query(
        `SELECT user_email FROM user_info WHERE user_email = ?`,
        [userEmail],
        (err, result) => {
            console.log(result)
            if (result.length == 0) {
                db.query(
                    "INSERT INTO user_info (user_full_name, user_email, user_phone, user_unp_or_inn, user_password, user_country) VALUES (?, ?, ?, ?, ?, ?)",
                    [userFullName, userEmail, userPhoneNumber, userUnpOrInn, userPassword, userCountry],
                )
                res.send(result)
            } else {
                res.send({ message: "почта занята" })
            }
        }
    )
});

app.post("/authorization", (req, res) => {
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    const userCountry = req.body.userCountry;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
        db.query(
            `SELECT * FROM user_info WHERE user_email = ? AND user_password = ?`,
            [userEmail, userPassword],
            (err, result) => {
                if (result.length > 0) {
                    res.send(result)
                    console.log(result)
                    console.log("enter")
                    return
                } else {
                    res.send({ message: "неверная почта или пароль" })
                    console.log("error")
                    return
                }
            }
        )
    } else {
        console.log("You have entered an invalid email address!")
    }
});

app.listen(3001, () => {
    console.log("running server")
})