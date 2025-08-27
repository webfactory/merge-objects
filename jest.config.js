export default {
    testEnvironment: 'node',
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Use Babel to transpile ES modules
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
};
