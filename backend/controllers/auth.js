const { json } = require("body-parser");
const User = require("../models/user")

exports.auth = ((req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                error: "The user Insertion failed"
            })
        }
        return res.json(user);
    })
});