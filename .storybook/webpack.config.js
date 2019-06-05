const path = require('path');
const SRC_PATH = path.join(__dirname, '../src/app');
//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve('babel-loader'),
        // options: {
        //   configFileName: './.storybook/tsconfig.json'
        // }
        options: { plugins: ['react-hot-loader/babel'] }
      },
      // { loader: require.resolve('react-docgen-typescript-loader') }
      'ts-loader'
    ].filter(Boolean)
  });
  config.module.rules.push({
    test: /\.s[ac]ss$/,
    include: [SRC_PATH],
    use: [{ loader: require.resolve('style-loader') }, { loader: require.resolve('css-loader') }]
  });
  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')];
  return config;
};
