const mongoosee = require("mongoose");
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const addUser = async (req: any, res: any) => {
  try {
    console.log(req.body,"=========")
    const user = new User(req.body);
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    const result = await User.create(user);
    res.send(`${result.firstName} successfully created!!`);
  } catch (err: any) {
    console.log('err', err)
    res.status(500).send(err.message);
  }
};

const login = async (req: any, res: any) => {
  try {
    User.findOne({ email: req.body.email })
      .then((user: any) => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }

        const token = JWT.sign({ id: user.id }, "Akanksha", {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: 86400, // 24 hours
        });
        res.status(200).send({
          id: user.id,
          firstName: user.firstName,
          email: user.email,
          accessToken: token,
        });
      })
      .catch((err: any) => {
        res.status(500).send({ message: err.message });
      });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const getListOfUser = async (req: any, res: any) => {
  try {
    const getAllUsers = await User.find({});
    if (getAllUsers) {
      res.status(200).send(getAllUsers);
    } else {
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

module.exports = { addUser, login, getListOfUser };
