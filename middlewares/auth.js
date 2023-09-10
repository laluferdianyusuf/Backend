const jwt = require("jsonwebtoken");
const { JWT, ROLES } = require("../lib/const");
const usersRepository = require("../repositories/usersRepository");

const authenticate = async (req, res, next) => {
  const authHeader = req.get("Authorization");

  let token = "";

  if (authHeader && authHeader.startsWith("Bearer"))
    token = authHeader.split(" ")[1];
  else
    return res.status(401).send({
      status: false,
      message: "You have to login to access this resource",
      data: null,
    });

  try {
    const { email } = jwt.verify(token, JWT.SECRET);

    const getUsers = await usersRepository.getByEmail({ email });
    req.users = getUsers;

    next();
  } catch (err) {
    return res.status(401).send({
      status: false,
      message: "your sesion has been revoked, please login first",
      data: null,
    });
  }
};

const isSuperAdmin = async (req, res, next) => {
  const user = req.users;

  if (user.role === ROLES.SUPERADMIN) return next();
  return res.status(401).send({
    status: false,
    message: "You must be superadmin to access this resource",
    data: null,
  });
};

const roles = async (req, res, next) => {
  const users = req.users;

  if (users.role === ROLES.SUPERADMIN || users.role === ROLES.ADMIN)
    return next();
  return res.status(401).send({
    status: false,
    message: "Your account doesn't have permissions",
    data: null,
  });
};

module.exports = { authenticate, isSuperAdmin, roles };
