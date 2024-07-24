export interface IArticle {
    title: string;
    abstract: string;
    image: string;
    id: number;
    url: string;
}

export type IArticlePeriod = "1" | "7" | "30";
