module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/laws",
        permanent: false,
      },
    ];
  },
};
