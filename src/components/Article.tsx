import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../constants";
import { IArticle } from "../types";

export function Article({ article }: { article: IArticle }) {
    const navigate = useHistory();

    const onArticleClickHandler = () => {
        navigate.push({
            pathname: `${ROUTES.ARTICLES}/${article.id}`,
            state: article,
        });
    };

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardActionArea onClick={onArticleClickHandler}>
                <CardMedia sx={{ height: 170 }} image={article?.image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {article?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article?.abstract}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
