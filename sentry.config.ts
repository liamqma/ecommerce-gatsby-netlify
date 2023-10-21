import * as Sentry from '@sentry/gatsby';

Sentry.init({
  dsn: 'https://c5f127c6047940b8a75bdca9147d16ce@o1191704.ingest.sentry.io/4505332049772544',
  integrations: [new Sentry.Replay()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  enabled: process.env.NODE_ENV !== 'development',
});
