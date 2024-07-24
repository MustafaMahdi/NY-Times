import { Divider, Stack, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { ArticleOverview, ArticleOwner } from "../components";
import { ArticleMainSection } from "../components/ArticleMainSection";
import { IArticle } from "../types";

export function ArticleDetails() {
    const navigate = useHistory();
    const article: IArticle = navigate.location.state as IArticle;

    return (
        <Stack gap={5} paddingX={"20%"} alignItems={"center"}>
            <ArticleOverview
                title={article?.title}
                content={article?.abstract}
            />
            <Divider sx={{ width: "100%" }} />
            <ArticleMainSection
                image={article?.image}
                content={article?.caption}
            />
            <ArticleOwner
                owner={article.byline}
                source={article.source}
                updated={article.updated}
            />
            <Typography variant="body1">{article.abstract}</Typography>
        </Stack>
    );
}
