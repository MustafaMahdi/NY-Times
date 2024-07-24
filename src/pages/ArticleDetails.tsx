import { Divider, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import { ArticleOverview } from "../components";
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
            <Divider sx={{ width: "100%" }} />
        </Stack>
    );
}
