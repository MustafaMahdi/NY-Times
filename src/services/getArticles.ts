import dayjs from "dayjs";
import { ARTICLES, LAST_1_DAY } from "../constants";
import { IArticle, IArticlePeriod } from "../types";
import fetcher from "../utils/api/fetcher";
import { METHODS } from "../utils/api/methods";

export async function getArticles(
    period: IArticlePeriod = LAST_1_DAY
): Promise<IArticle[]> {
    const key = process.env.REACT_APP_ARTICLES_API_KEY;
    if (!key) {
        throw new Error("API key is missing");
    }
    const options = { method: METHODS.GET, isAuth: false };
    const res = await fetcher(ARTICLES(key, period), options);
    const articles: IArticle[] = structureArticles(res);

    return articles;
}

function structureArticles(res: any): IArticle[] {
    const articles: IArticle[] = res?.results?.map((article: any) => ({
        title: article?.title,
        abstract: article?.abstract,
        id: article?.id,
        image: article?.media[0]?.["media-metadata"]?.[0]?.url,
        caption: article?.media[0]?.caption,
        url: article?.url,
        updated: dayjs(article?.updated).format("MMMM D, YYYY h:mm A"),
        byline: article?.byline,
        source: article?.source,
    }));
    return articles;
}
