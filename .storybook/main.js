// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../src/components/**/*.stories.tsx',
    '../src/features/**/components/**/*.stories.tsx',
    '../src/features/**/pages/**/*.stories.tsx'
  ],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  }
};
