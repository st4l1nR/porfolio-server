module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c22fec3ac8137fe2d4b0f37df7710547'),
  },
});
