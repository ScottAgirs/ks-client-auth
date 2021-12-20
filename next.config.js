module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ks-api-auth-o6629.ondigitalocean.app/api/:path*',
      }
    ];
  },
};