/**
 * CE.SDK Apparel UI Starterkit - React Entry Point
 *
 * A custom apparel design editor for t-shirts and clothing
 * with text, graphics, and product mockup views.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import { createRoot } from 'react-dom/client';

import App from './app/App';

// ============================================================================
// Configuration
// ============================================================================

// Engine configuration (see https://img.ly/docs/cesdk/engine/api/configuration/)
const engineConfig = {
  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',

  // Base URL for CE.SDK assets (for self-hosted deployments)
  // baseURL: '/assets/',

  // Feature flags
  featureFlags: {
    preventScrolling: true
  }
};

// Unsplash API proxy URL (leave empty to disable)
// Set up your own proxy: https://img.ly/docs/cesdk/ui/guides/using-unsplash/
const unsplashApiUrl = ''; // INSERT YOUR UNSPLASH PROXY URL HERE

// ============================================================================
// Initialize React Application
// ============================================================================

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);
root.render(<App engineConfig={engineConfig} unsplashApiUrl={unsplashApiUrl} />);
