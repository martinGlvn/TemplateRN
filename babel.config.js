module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
      ],
      plugins: [
        ['module-resolver', {
          alias: {
            '@assets': './assets',
            '@fonts': './assets/fonts',
            '@icons': './assets/icons',
            '@images': './assets/images'
          }
        }],
        'react-native-reanimated/plugin',
      ], 
    };
  };