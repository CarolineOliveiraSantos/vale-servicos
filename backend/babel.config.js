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
          '@/config': './src/config',
          '@/Controllers': './src/Controllers',
          '@/database': './src/database',
          '@/domain': './src/domain',
          '@/interfaces': './src/interfaces',
          '@/main': './src/main',
          '@/uploads': './src/uploads',
          '@/test': './test',
        },
      },
    ],
  ],
}
