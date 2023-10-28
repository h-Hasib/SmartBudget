module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel',
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': ['./src/components'],
            '@screens': ['./src/screens'],
            '@assets': ['./src/assets'],
            '@constants': ['./src/constants'],
            '@hooks': ['./src/hooks'],
            '@navigation': ['./src/navigation'],
            '@services': ['./src/services'],
            '@store': ['./src/store'],
            '@interfaces': ['./src/interfaces'],
            '@languages': ['./src/languages'],
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
