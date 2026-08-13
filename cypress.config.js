require('dotenv').config();
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {

    await addCucumberPreprocessorPlugin(on, config);

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    );

    return config;
}


module.exports = defineConfig({

    e2e: {

        baseUrl: 'https://paciente-staging.lacreisaude.com.br',

        specPattern: 'cypress/e2e/**/*.feature',

        supportFile: 'cypress/support/e2e.js',

        env: {
            LACREI_EMAIL: process.env.LACREI_EMAIL,
            LACREI_PASSWORD: process.env.LACREI_PASSWORD,
        },

        setupNodeEvents,

    },
})