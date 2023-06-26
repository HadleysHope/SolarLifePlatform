const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: 'http://localhost:3001', // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
