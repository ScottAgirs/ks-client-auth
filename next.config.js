module.exports = {
  async rewrites() {
    return [
      {
        source: '/api*',
        destination: 'https://ks-api-auth-o6629.ondigitalocean.app/api*',
      }
    ];
  },
};