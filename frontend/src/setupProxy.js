const { createProxyMiddleware } = require('http-proxy-middleware');

// allows for the backend endpoints http://localhost:3001/OAuth, /fixMyPlaylist, /topPlayed
// to be accessed through http://localhost:3000
module.exports = function(app) {
  app.use(
    ['/OAuth','/fixMyPlaylist','/topPlayed'],
    createProxyMiddleware({
      target: `${process.env.REACT_BACKEND_URL || "http://localhost:3001"}`,
      changeOrigin: true,
    }),
  );
};