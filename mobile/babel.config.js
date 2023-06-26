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
            '@/constants': './src/constants',
            '@/contexts': './src/contexts',
            '@/domain': './src/domain',
            '@/hooks': './src/hooks',
            '@/infra': './src/infra',
            '@/interfaces': './src/interfaces',
            '@/main': './src/main',
            '@/services': './src/services',
            '@/ui': './src/ui',
            '@/test/*': './test',
            '@/jest/*': './jest',
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
