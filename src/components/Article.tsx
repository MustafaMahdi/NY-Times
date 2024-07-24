import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { IArticle } from "../types";

export function Article({ article }: { article: IArticle }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={article?.image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {article?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article?.abstract}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More</Button>
            </CardActions>
        </Card>
    );
}
