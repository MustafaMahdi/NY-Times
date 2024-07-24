import { Stack, Typography } from "@mui/material";

export function ArticleOverview({
    title,
    content,
}: {
    title: string;
    content: string;
}) {
    return (
        <Stack gap={2} alignItems={"center"}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="h6" sx={{ alignSelf: "start" }}>
                {content}
            </Typography>
        </Stack>
    );
}
