export default {
  jwt: {
    secret: process.env.JWT_SECRET || '262922a32d0a71601d38db7fe11c0f0c',
    expiresIn: '1d',
  },
};
