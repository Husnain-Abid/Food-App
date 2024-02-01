const jwt = require("jsonwebtoken")

const authMiddleWare = async (req, res, next) => {
    try {

        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token, process.env.SECRETE_KEY, (err, decoded) => {
            if (err) {
            return res.status(400).send({message : "un-authoraized tokken"})
            } else {
                req.body.id = decoded.id;
                next();
            }
        });

    } catch (error) {
        res.status(400).send({message : "please provide tokken"})    
    }

}


module.exports = authMiddleWare




