export default {
  host: process.env.HOST,
  port: process.env.PORT,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  default: {
    from: 'Leleco <semreplay@barbudos.com>',
  },
};
