module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/laws",
        destination: "/measures",
        permanent: true,
      },
    ];
  },
};
