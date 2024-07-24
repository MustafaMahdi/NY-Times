import { useQuery } from "react-query";
import { getArticles } from "../services";
export const useGetArticles = () => {
    return useQuery(["articlesList"], (): Promise<any> => getArticles());
};
