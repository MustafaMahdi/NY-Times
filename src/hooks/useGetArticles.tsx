import { useQuery } from "react-query";
import { getArticles } from "../services";
import { IArticle } from "../types";
export const useGetArticles = () => {
    return useQuery(["articlesList"], (): Promise<IArticle[]> => getArticles());
};
