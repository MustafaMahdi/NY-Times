import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { IArticle } from "../types";

export function Article({ article }: { article: IArticle }) {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
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
