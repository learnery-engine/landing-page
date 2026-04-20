import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://28e7756a483d9d2dc2a7198db880be0e@o261367.ingest.us.sentry.io/4511165226287104',
  enabled: import.meta.env.PROD,
  integrations: [
    Sentry.browserTracingIntegration({
      // Don't create spans for slow third-party APIs we don't control.
      // Bubble auth routinely takes 2-5s and pollutes p95 metrics.
      shouldCreateSpanForRequest: (url) => {
        if (url.includes('bubbleapps.io')) return false
        if (url.includes('app.learneris.com')) return false
        if (url.includes('googleapis.com')) return false
        return true
      },
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  ignoreErrors: [
    /zaloJSV2/,
    /ResizeObserver loop/,
    /Non-Error promise rejection/,
  ],
});

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
