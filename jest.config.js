module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: ["dotenv-flow/config"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
