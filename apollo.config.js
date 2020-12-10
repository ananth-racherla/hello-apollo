// apollo.config.js
module.exports = {
    service: {
      name: 'hello-apollo',
      endpoint: {
        url: 'http://localhost:3000/graphql',
        skipSSLValidation: true // optional, disables SSL validation check
      }  
    }
};
