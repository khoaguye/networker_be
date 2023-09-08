import { db } from "../db.js";
export const addPeople = (req,res) =>{
    const q = "SELECT * FROM peopleinfor WHERE email = ?";
    db.query(q,[req.body.email], (err, data) => {
        if (err) return res.json
        if (data.length) return res.status(409).json("Email exist")
    
    const q = "INSERT INTO peopleinfor (`company`,`firstname`,`lastname`, `email`, `linkedin`, `note`) VALUES (?)"
    const values = [
        req.body.company,
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.linkedin,
        req.body.note
    ]
    db.query(q, [values], (err, data) =>{
        if(err) return res.json(err);
        return res.status(200).json("Thank you for connect")
    })
})
}

db.connect((error) => {
    if (error) {
      console.log('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database.');
      //allProduct()
    }
  });