const Cypress = require('cypress');

module.exports = Cypress.defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000'
  }
});
