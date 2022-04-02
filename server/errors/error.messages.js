module.exports = {
  EMAIL_BUSY: {
    message: 'This email is already registered.',
    code: '401.1'
  },
  FIELD_NOT_FILLED: {
    message: (error) => error,
    code: '401.2'
  },
  ROUT_NOT_FOUND: {
    message: 'Rout not found.',
    code: '404.1'
  },
  WRONG_EMAIL_OR_PASS: {
    message: 'Wrong email or password.',
    code: '401.3'
  },
  NO_TOKEN: {
    message: 'No token',
    code: '401.4'
  },
  WRONG_TOKEN: {
    message: 'Wrong token',
    code: '401.5'
  },
  WRONG_FILE_FORMAT: {
    message: 'Wrong file format',
    code: '422'
  },

  FILE_IS_TOO_LARGE: {
    message: 'File is too large',
    code: '413'
  }

};
