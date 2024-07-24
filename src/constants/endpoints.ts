export const BASE_URL = "https://api.nytimes.com/svc";
export const ARTICLES = (key: string) =>
    `${BASE_URL}/mostpopular/v2/viewed/1.json?api-key=${key}`;