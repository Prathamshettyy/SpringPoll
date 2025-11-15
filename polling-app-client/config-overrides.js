const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: { 
        // --- Dark Theme Variables ---
        '@primary-color': '#1DA57A',
        '@body-background': '#1f1f1f',
        '@component-background': '#2d2d2d',
        '@layout-body-background': '#1f1f1f',
        '@layout-header-background': '#2d2d2d',
        '@text-color': 'rgba(255, 255, 255, 0.85)',
        '@heading-color': 'rgba(255, 255, 255, 0.95)',
        '@border-color-base': '#4d4d4d',
        '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32), 0 9px 28px 8px rgba(0, 0, 0, 0.2)',

        // --- NEW: FIX FOR ALL INPUTS ---
        '@input-bg': '#1f1f1f',
        '@input-color': 'rgba(255, 255, 255, 0.85)',
        '@input-placeholder-color': 'rgba(255, 255, 255, 0.5)',
        '@input-hover-border-color': '#1DA57A',
        '@input-icon-color': 'rgba(255, 255, 255, 0.5)',
        '@input-number-handler-bg': '#2d2d2d',
        '@input-number-handler-hover-bg': '#1DA57A',
        '@input-icon-hover-color': '#1DA57A'
    },
    javascriptEnabled: true
  })(config, env);
  return config;
};