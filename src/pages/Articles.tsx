import { Stack, Typography } from "@mui/material";
import { Article } from "../components";
import { Loading } from "../components/Loading";
import { useGetArticles } from "../hooks";

export function Articles() {
    const { data: articles, isLoading } = useGetArticles();
    if (isLoading) {
        return <Loading />;
    }

    return (
        <Stack padding={5}>
            <Typography variant="h4">Articles</Typography>
            <Stack gap={3} direction={"row"} flexWrap={"wrap"}>
                {articles?.map((article) => (
                    <Article key={article.id} article={article} />
                ))}
            </Stack>
        </Stack>
    );
}
