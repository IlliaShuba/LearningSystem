const jwt = require("jsonwebtoken");

class Token {
  #jwtSecretKey;
  #tokenHeaderKey;

  constructor() {
    this.#jwtSecretKey = process.env.JWT_SECRET_KEY;
    this.#tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  }

  validate(value) {
    try {
      return !!jwt.verify(value, this.#jwtSecretKey);
    } catch (error) {
      return false;
    }
  }

  create(user_id) {
    let data = {
      time: Date(),
      user_id: user_id,
    };
    const token = jwt.sign(data, this.#jwtSecretKey);
    return token;
  }

  decode(token) {
    var decoded = jwt.decode(token);
    return decoded
  }
}

module.exports = Token;
