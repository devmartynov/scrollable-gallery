import { ProdConfig, DevConfig } from '../config';

/**
 * Конфигурация приложения, в зависимости от окружения
 */
export default function useAppConfig() {
    if (process.env.__DEV__) {
        return DevConfig;
    }
    return ProdConfig;
}
