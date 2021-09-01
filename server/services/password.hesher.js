const bcrypt = require('bcrypt');

module.exports = {
  compare: async (hashedPassword, password) => {
    const isPasswordMatched = await bcrypt.compare(password, hashedPassword);

  },

  hash: (password) => bcrypt.hash(password, 10)
};
