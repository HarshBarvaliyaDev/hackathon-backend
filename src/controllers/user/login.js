const { UserModel } = require("../../models/index");
const { loginValidation } = require("../../joiValidations/index");

const jwtSecretKey="aiuoerhgfoajrh28937456hjrt5b4375ty6397w46975294eug24eg4xn9387txd87tr238j6s4tr53864"

const jwt = require("jsonwebtoken");

async function login(req, res, next) {
    try {

        const validation = loginValidation.validate(req.body);
        if (validation.error) {
            res.status(400).json(validation.error);
            return;
        }

        const user = await UserModel.findOne({ email: req.body.email });
        if (user) {
            if (user.password == req.body.password) {
                const accessToken = jwt.sign({
                    _id: user._id,
                    Date: Date.now(),
                } , process.env.jwtSecretKey);
                res.cookie("accessToken", accessToken , {httpOnly : true});
                res.status(200).json({ message: "login successfull" });
                return;
            }
            res.status(400).json({ message: "password is incorrect" });
            return;
        }
        if (!user) {
            res.status(400).json({ message: "user does't exist " });
            return;
        }

        res.json({ message: "something went wrong" });
    } catch (error) {
        console.log(
            "<========================login Error===========================>"
        );
        console.log(error);
    }
}

module.exports = {
    login,
};
