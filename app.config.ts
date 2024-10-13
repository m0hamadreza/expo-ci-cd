import appProductionConfig from './app.json';

module.exports = () => {
    if (process.env.EXPO_PUBLIC_ENV === 'PRODUCTION') {
        return appProductionConfig;
    } else if (process.env.EXPO_PUBLIC_ENV === 'STAGE') {
        return {};
    } else {
        return {};
    }
};
