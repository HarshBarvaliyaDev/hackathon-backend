const jwt = require('jsonwebtoken')


const jwtSecretKey="aiuoerhgfoajrh28937456hjrt5b4375ty6397w46975294eug24eg4xn9387txd87tr238j6s4tr53864"


function authenticateToken(req, res, next) {
    try {
        function varifyToken(token) {
      
            jwt.verify(token, jwtSecretKey, (err, user) => {
             
                req.user = user;
                console.log("token authorizied");
                next();
                return;
            });
        }

        if (req.cookies && req.cookies.accessToken) {
   
            varifyToken(req.cookies.accessToken);
            return;
        }

        if (req.headers.authorization) {
            const authHeader = req.headers.authorization;
            const token = authHeader && authHeader.split(" ")[1];
            varifyToken(token);
            return;
        }
        res.json({ error: "token does not exist" });
        return;
    } catch (error) {
        res.json({ error: error });
    }
}
module.exports = {
    authenticateToken
}