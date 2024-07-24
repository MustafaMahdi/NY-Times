import { IOptions, getUrl, prepareOptions } from "./helpers";

export class ApiError extends Error {
    status: number;
    constructor(message: string, status: number) {
        super(message);
        this.name = "ApiError";
        this.status = status;
    }
}

export default async function fetcher(
    endpoint: string,
    // eslint-disable-next-line default-param-last
    options: IOptions = { isAuth: true },
    params?: string
) {
    const url = getUrl(endpoint, params);
    const preparedOptions = await prepareOptions(options);

    const res = await fetch(url, preparedOptions);

    if (!res.body || res.status === 204) {
        return {};
    }

    const resJson = await res.json();

    if (!res.ok) {
        throw new ApiError(resJson?.error, res.status);
    }

    return resJson;
}
