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
            '@/data': './src/data',
            '@/domain': './src/domain',
            '@/infra': './src/infra',
            '@/main': './src/main',
            '@/services': './src/services',
            '@/ui': './src/ui',
            '@/test/*': './test',
            '@/jest/*': './jest',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
