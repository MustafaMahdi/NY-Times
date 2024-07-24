import { Box, CircularProgress } from "@mui/material";

export function Loading({ height = 100 }: { height?: number }) {
    return (
        <Box
            sx={{
                height: { height },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress />
        </Box>
    );
}
