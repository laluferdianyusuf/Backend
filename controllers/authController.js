const authService = require("../services/authService");

const register = async (req, res) => {
  const { name, email, password, room, role } = req.body;

  const { status, status_code, message, data } = await authService.register({
    name,
    email,
    password,
    room,
    role,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const currentUser = async (req, res) => {
  const currentUser = req.users;

  res.status(200).send({
    status: true,
    message: "You are logged in with this user",
    data: {
      user: currentUser,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, status_code, message, data } = await authService.login({
    email,
    password,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = { register, login, loginUser, currentUser };
