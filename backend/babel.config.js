module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        alias: {
          '@/domain': './src/domain',
          '@/config': './src/config',
          '@/Controllers': './src/Controllers',
          '@/database': './src/database',
          '@/helpers': './src/helpers',
          '@/infra': './src/infra',
          '@/interfaces': './src/interfaces',
          '@/main': './src/main',
          '@/presentation': './src/presentation',
          '@/uploads': './src/uploads',
          '@/utils': './src/utils',
          '@/test': './test',
        },
      },
    ],
  ],
}
