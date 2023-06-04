module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/@types': './src/@types',
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/constants': './src/constants',
            '@/contexts': './src/contexts',
            '@/errors': './src/errors',
            '@/hooks': './src/hooks',
            '@/infra': './src/infra',
            '@/interfaces': './src/interfaces',
            '@/pages': './src/pages',
            '@/routes': './src/routes',
            '@/services': './src/services',
            '@/styles': './src/styles',
            '@/utils': './src/utils',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
