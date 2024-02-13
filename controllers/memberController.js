const db = require("../configs/db.js");

const newMember = async (req, res) => {
    const { name, phone, school_number, email, school, department } = req.body;
    
    await db.query(`SELECT * FROM members WHERE school_number = '${school_number}' AND name = '${name}'`, 
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error while selecting data");
            }
            else if (result.length > 0) {
                res.status(201).send("User Already Exist");
            } 
            else {
                db.query(`INSERT INTO members (name, phone, school_number, email, school, department) VALUES ('${name}', '${phone}', '${school_number}', '${email}', '${school}', '${department}')`,
                    (err, result) => {
                        if (err) {
                            console.log(err.message);
                            res.status(500).send("Member did not join");
                        }
                        else {
                            res.status(200).json({
                                "name": name,
                                "phone": phone,
                                "school_number": school_number,
                                "email": email,
                                "school": school,
                                "department": department
                            });
                        }
                    }
                );

            }
        }
    )

}

const getMembers = async (req, res) => {
    db.query("SELECT * FROM members", (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(400).send("ERROR");
        }
        console.log(result);
        res.status(200).json(result)
    });
}

const checkMember = async (req, res) => {
    const { name, school_number } = req.body;
    await db.query(`SELECT * FROM members WHERE school_number = '${school_number}' AND name = '${name}'`, (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(400).send("ERROR");
        }
        console.log(result);
        console.log(result.body);
        if (result.body) {
            
        }
        res.status(200).json(result)
    });
}

module.exports = { newMember, getMembers, checkMember }