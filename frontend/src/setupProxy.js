const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/OAuth','/fixMyPlaylist','/topPlayed'],
    createProxyMiddleware({
      target: `${process.env.REACT_BACKEND_URL || 'http://localhost:3001'}`,
      changeOrigin: true,
    }),
  );
};