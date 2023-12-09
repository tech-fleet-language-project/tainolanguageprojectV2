module.exports = function (api) {
  api.cache(true);
  // const preset_react = () => process.env.NODE_ENV === 'development' || 'test' ? '@babel/plugin-transform-react-jsx-development' : '@babel/plugin-transform-react-jsx'

  return {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      [['@babel/preset-react', {development: true}]],
      'module:metro-react-native-babel-preset',
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
          ],
        },
      ],
      ["@babel/plugin-transform-async-to-generator"]
    ],
    targets: {
      esmodules: true,
    },
  };
};
