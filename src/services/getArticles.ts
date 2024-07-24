import { ARTICLES } from "../constants/endpoints";
import fetcher from "../utils/api/fetcher";
import { METHODS } from "../utils/api/methods";

const key = process.env.ARTICLES_API_KEY;
export async function getArticles() {
    if (!key) {
        throw new Error("API key is missing");
    }
    const options = { method: METHODS.GET, isAuth: false };
    const res = await fetcher(ARTICLES(key), options);

    return res;
}
