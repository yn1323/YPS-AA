module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/components', '<rootDir>/src', '<rootDir>/public'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTest.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: '<rootDir>/test/tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '^@locales(.*)$': '<rootDir>/locales$1',
    '^src(.*)$': '<rootDir>/src/$1',
    '^@helper': '<rootDir>/src/helper',
    '^@hooks': '<rootDir>/src/hooks',
    '^@constant': '<rootDir>/src/constant',
    '^@recoil(.*)$': '<rootDir>/src/recoil$1',
    '^@atom(.*)$': '<rootDir>/components/atom$1',
    '^@molecule(.*)$': '<rootDir>/components/molecule$1',
    '^@organism(.*)$': '<rootDir>/components/organism$1',
    '^@template(.*)$': '<rootDir>/components/template$1',
    '^@test(.*)$': '<rootDir>/test$1',
  },
  snapshotResolver: '<rootDir>/test/snapshotResolver.js',
  collectCoverageFrom: [
    'components/**/*/index.{ts,tsx}',
    'src/helper/*[^index].{ts,tsx}',
  ],
  collectCoverage: true,
}
