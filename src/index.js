/* eslint-disable no-console */
const logger = require('./logger');
const { createApp, startApp } = require('./app');

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

async function main() {
  const app = createApp();
  // Exit early
  console.log('Exiting early with code 1');
  process.exit(1);
  // await startApp(app);
  // logger.info(`Feathers application started on http://${app.get('host')}:${app.get('port')}`);
}

main().catch((err) => {
  logger.error('App initialization failed', err);
  process.exit(11);
});
