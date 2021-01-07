const colors = require('colors/safe');
const dotenv = require('dotenv');
const packageJson = require('../package.json');
const envResult = dotenv.config();

if (envResult.error) {
  console.error(
    `${colors.red('[ERROR] env failed to load: ')} ${envResult.error}`
  );
  process.exit(1);
}

function requireFromEnv(key) {
  if (!process.env[key]) {
    console.error(`${colors.red('[APP ERROR] Missing env variable: ')} ${key}`);

    process.exit(1);
  }

  return process.env[key];
}

module.exports = {
  appName: requireFromEnv('APP_NAME'),
  env: requireFromEnv('NODE_ENV'),
  dataBaseUrl: requireFromEnv('DATABASE_URL'),
  port: parseInt(requireFromEnv('PORT'), 10),
  version: packageJson.version
};