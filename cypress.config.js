require('dotenv').config();

const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
    addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor');
const {
    createEsbuildPlugin
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    );

    config.env.LACREI_EMAIL =
        process.env.CYPRESS_LACREI_EMAIL ||
        process.env.LACREI_EMAIL ||
        config.env.LACREI_EMAIL;

    config.env.LACREI_PASSWORD =
        process.env.CYPRESS_LACREI_PASSWORD ||
        process.env.LACREI_PASSWORD ||
        config.env.LACREI_PASSWORD;

    config.env.LACREI_RECOVERY_EMAIL =
        process.env.CYPRESS_LACREI_RECOVERY_EMAIL ||
        process.env.LACREI_RECOVERY_EMAIL ||
        config.env.LACREI_RECOVERY_EMAIL;

    return config;
}

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://paciente-staging.lacreisaude.com.br',

        specPattern: 'cypress/e2e/**/*.feature',

        supportFile: 'cypress/support/e2e.js',

        setupNodeEvents,
    },
});