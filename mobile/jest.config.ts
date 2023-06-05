import { Config } from 'jest'
import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'
const config: Config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/jest/jest-setup.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  preset: 'jest-expo',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
}
export default config
