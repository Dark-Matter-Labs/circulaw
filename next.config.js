module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/measures",
        destination: "/laws",
        permanent: true,
      },
    ];
  },
};
