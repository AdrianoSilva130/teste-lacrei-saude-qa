require('dotenv').config();

module.exports = {
    BASE_URL: 'https://paciente-staging.lacreisaude.com.br/login',
    EMAIL: process.env.LACREI_EMAIL,
    PASSWORD: process.env.LACREI_PASSWORD,
    RECOVERY_EMAIL: process.env.LACREI_RECOVERY_EMAIL
};