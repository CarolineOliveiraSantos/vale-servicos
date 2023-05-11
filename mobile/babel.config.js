module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/@types': './src/@types',
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/contexts': './src/contexts',
            '@/errors': './src/errors',
            '@/hooks': './src/hooks',
            '@/pages': './src/pages',
            '@/routes': './src/routes',
            '@/services': './src/services',
            '@/styles': './src/styles',
            '@/utils': './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
