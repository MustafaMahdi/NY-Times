import { HEADERS } from "./headers";
import { METHODS } from "./methods";

export interface IOptions {
    method?: METHODS;
    body?: any;
    headers?: any;
    isAuth: boolean;
}

export const getUrl = (endpoint: string, params?: string) => {
    if (params) {
        return `${endpoint}?${params}`;
    }
    return endpoint;
};

export const prepareOptions = async (options: IOptions) => {
    if (options.isAuth) {
        // TODo verify user
    } else {
        options.headers = { ...HEADERS, ...options.headers };
    }

    if (options.body) {
        options.body = JSON.stringify(options.body);
    }
    return options;
};
