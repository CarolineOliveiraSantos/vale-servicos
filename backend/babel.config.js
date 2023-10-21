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
    '@babel/plugin-transform-strict-mode',
    ['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        alias: {
          '@/config': './src/config',
          '@/Controllers': './src/Controllers',
          '@/data': './src/data',
          '@/database': './src/database',
          '@/domain': './src/domain',
          '@/helpers': './src/helpers',
          '@/infra': './src/infra',
          '@/interfaces': './src/interfaces',
          '@/main': './src/main',
          '@/presentation': './src/presentation',
          '@/shared': './src/shared',
          '@/uploads': './src/uploads',
          '@/utils': './src/utils',
          '@/validation': './src/validation',
          '@/test': './test',
        },
      },
    ],
  ],
}
