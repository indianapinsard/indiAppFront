module.exports = {
  'moduleNameMapper': {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mocks/fileMock.js',
    '^Home(.*)$': '<rootDir>/src/home$1',
    '^Utils(.*)$': '<rootDir>/src/utils$1',
    '^Assets(.*)$': '<rootDir>/src/assets$1',
    '^Commons(.*)$': '<rootDir>/src/commons$1',
    '^Globals(.*)$': '<rootDir>/src/globals$1',
    '^Category(.*)$': '<rootDir>/src/Category$1',

  },

  'moduleFileExtensions': ['js', 'jsx', 'json'],
  'moduleDirectories': ['node_modules', 'bower_components', 'shared'],
}