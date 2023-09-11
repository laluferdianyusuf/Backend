const usersRepository = require("../repositories/usersRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT } = require("../lib/const");
const { OAuth2Client } = require("google-auth-library");

const SALT_ROUND = 10;

class AuthService {
  static async register({ name, email, password, room, role }) {
    try {
      if (!name) {
        return {
          status: false,
          status_code: 400,
          message: "Name is required",
          data: {
            registered_user: null,
          },
        };
      }

      if (!email) {
        return {
          status: false,
          status_code: 400,
          message: "Email is required",
          data: {
            registered_user: null,
          },
        };
      }

      if (!password) {
        return {
          status: false,
          status_code: 400,
          message: "Password is required",
          data: {
            registered_user: null,
          },
        };
      } else if (password.length < 8) {
        return {
          status: false,
          status_code: 400,
          message: "Password minimum 8 characters",
          data: {
            registered_user: null,
          },
        };
      }

      if (!room) {
        return {
          status: false,
          status_code: 400,
          message: "Room is required",
          data: {
            registered_user: null,
          },
        };
      }

      if (!role) {
        return {
          status: false,
          status_code: 400,
          message: "Role is required",
          data: {
            registered_user: null,
          },
        };
      }

      const getUserRoom = await usersRepository.getByRoom({ room });

      if (getUserRoom) {
        return {
          status: false,
          status_code: 400,
          message: "Room has been used",
          data: {
            registered_user: null,
          },
        };
      }

      const getUserEmail = await usersRepository.getByEmail({ email });

      if (getUserEmail) {
        return {
          status: false,
          status_code: 400,
          message: "email has been used",
          data: {
            registered_user: null,
          },
        };
      } else {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

        const createdUser = await usersRepository.create({
          name,
          email,
          password: hashedPassword,
          room,
          role,
        });

        return {
          status: true,
          status_code: 201,
          message: "User succesfully registered",
          data: {
            registered_user: createdUser,
          },
        };
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          registered_user: null,
        },
      };
    }
  }

  static async login({ email, password }) {
    try {
      if (!email) {
        return {
          status: false,
          status_code: 400,
          message: "Email is required",
          data: {
            Login_user: null,
          },
        };
      }

      if (!password) {
        return {
          status: false,
          status_code: 400,
          message: "Password is required",
          data: {
            Login_user: null,
          },
        };
      } else if (password < 8) {
        return {
          status: false,
          status_code: 400,
          message: "Password minimum 8 characters",
          data: {
            Login_user: null,
          },
        };
      }

      const getUser = await usersRepository.getByEmail({ email });

      if (!getUser) {
        return {
          status: false,
          status_code: 404,
          message: "Login Error",
          data: {
            registered_user: null,
          },
        };
      } else {
        const isPassTrue = await bcrypt.compare(password, getUser.password);

        if (isPassTrue) {
          const token = jwt.sign(
            {
              id: getUser.id,
              email: getUser.email,
            },
            JWT.SECRET,
            {
              expiresIn: JWT.EXPIRED,
            }
          );

          return {
            status: true,
            status_code: 200,
            message: "Login succesfully",
            data: {
              token,
            },
          };
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          Login_user: null,
        },
      };
    }
  }
}

module.exports = AuthService;
