const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // require('@cypress/grep/src/plugin')(config);
      // return config;
    },
  },
  env: { grepFilterSpecs: true, grepOmitFiltered: true },
  "grepTags": "@regression",
   // These settings apply everywhere unless overridden
   defaultCommandTimeout: 5000,
   viewportWidth: 1240,
   viewportHeight: 1000,
   // Viewport settings overridden for component tests // random used is 1000/660
   component: { //only for component testing
     viewportWidth: 1980,
     viewportHeight: 1920,
   },
});
