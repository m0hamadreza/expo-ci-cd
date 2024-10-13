import appProductionConfig from './app.json';
import appStageConfig from "./app-stage.json"
module.exports = () => {
    if (process.env.EXPO_PUBLIC_ENV === 'PRODUCTION') {
        return appProductionConfig;
    } else if (process.env.EXPO_PUBLIC_ENV === 'STAGE') {
        return appStageConfig;
    } else {
        return {};
    }
};
