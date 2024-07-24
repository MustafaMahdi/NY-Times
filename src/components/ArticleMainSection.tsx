import { ImageList, ImageListItem, Stack, Typography } from "@mui/material";

export function ArticleMainSection({
    image,
    content,
}: {
    image: string;
    content: string;
}) {
    return (
        <Stack gap={0} alignItems={"center"}>
            <ImageList sx={{ width: 500, height: 450 }} cols={1}>
                <ImageListItem>
                    <img
                        srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image}?w=248&fit=crop&auto=format`}
                        alt={content}
                        loading="lazy"
                    />
                </ImageListItem>
            </ImageList>
            <Typography
                variant="body1"
                color={"text.secondary"}
                sx={{ alignSelf: "start" }}
            >
                {content}
            </Typography>
        </Stack>
    );
}
