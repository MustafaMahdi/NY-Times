import { Avatar, Stack, Typography } from "@mui/material";

export function ArticleOwner({
    owner,
    source,
}: {
    owner: string;
    source: string;
}) {
    function stringToColor(string: string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name: string) {
        return {
            sx: {
                bgcolor: stringToColor(name),
                alignSelf: "start",
            },
            children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
        };
    }
    return (
        <Stack direction={"row"} gap={2} sx={{ alignSelf: "start" }}>
            <Avatar {...stringAvatar(owner)} />
            <Stack gap={0.5}>
                <Typography variant="body1">{owner}</Typography>
                <Typography variant="body2" color={"text.secondary"}>
                    {`Reporting from ${source}`}
                </Typography>
            </Stack>
        </Stack>
    );
}
