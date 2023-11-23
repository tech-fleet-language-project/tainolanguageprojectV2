module.exports = function (api) {
  // const preset_react = () => process.env.NODE_ENV === 'development' || 'test' ? '@babel/plugin-transform-react-jsx-development' : '@babel/plugin-transform-react-jsx'

  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
      'module:metro-react-native-babel-preset',
    ],
    plugins: [
      [['@babel/preset-react', {development: true}]],
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
    ],
  };
};
