const { encrypt, decrypt } = require("../crypto");
const dotenv = require("dotenv");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

dotenv.config();

encrypt_password = (password) => {
    const encryptedPassword = encrypt(password);
    return encryptedPassword.iv + "_" + encryptedPassword.content;
};

compare_password = (password, encryptedPassword) => {
    const pwd = {
        iv: encryptedPassword.split("_")[0],
        content: encryptedPassword.split("_")[1],
    };
    return decrypt(pwd) === password;
};

exports.signIn = async (req, res) => {
    await User.findOne({
        email: req.body.email.toLowerCase(),
    }).then((result) => {
        if (!result) {
            return res.status(401).send({ error: "Not authorised" });
        }

        if (!compare_password(req.body.password, result.password)) {
            return res.status(401).send({ error: "Not authorised" });
        }

        let payload = { id: result._id, email: result.email };

        let accessToken = jwt.sign(
            {
                data: payload,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1h" }
        );

        return res.send({
            message: "success",
            accessToken,
            user: result.fullname,
        });
    });
};

exports.signup = async (req, res) => {
    try {
        const { fullname, email, phone, password } = { ...req.body };

        if (!fullname || fullname == '' || !email || email == '' || !phone || phone == '' || !password || password == '') {
            res.status(500).send('Insufficient data to create user');
            return;
        }

        const encPwd = encrypt_password(password);

        const user = new User({
            fullname: fullname.toLowerCase(),
            email: email.toLowerCase(),
            phone: phone.toLowerCase(),
            password: encPwd,
        });

        await User.find({ email: req.body.email }).then(async (result) => {
            if (result.length) {
                return res.status(500).send({ error: "Email already exists" });
            } else {
                await user.save();
                return res.send({ message: "User created successfully" });
            }
        });
    } catch (error) {
        console.log(error);
        res.send(error);
    }

};
