const redirectsArray = [
    { source: '/', destination: '/en', permanent: true },
  ];
  
  async function redirects() {
    return redirectsArray;
  }
  
  module.exports = {
    redirects,
  };