import { IArticlePeriod } from "../types";

export const BASE_URL = "https://api.nytimes.com/svc";
export const ARTICLES = (key: string, period: IArticlePeriod) =>
    `${BASE_URL}/mostpopular/v2/viewed/${period}.json?api-key=${key}`;
