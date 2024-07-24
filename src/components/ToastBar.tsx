import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import { Alert, AlertTitle, Snackbar, Typography } from "@mui/material";

export interface IToastBar {
    open: boolean;
    title: string;
    description: string;
    duration?: number;
    notificationType: "error" | "success" | "warning";
    onClose: () => void;
}
const toastBarIcon = {
    error: <ErrorRoundedIcon fontSize="inherit" />,
    success: <CheckCircleOutlineOutlinedIcon fontSize="inherit" />,
    warning: <WarningAmberOutlinedIcon fontSize="inherit" />,
};

export function ToastBar({
    open,
    onClose,
    title,
    description,
    notificationType,
    duration = 5000,
}: IToastBar) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={duration}
            sx={(theme) => ({
                padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
                gap: theme.spacing(2),
                width: theme.spacing(40),
            })}
            onClose={onClose}
        >
            <Alert
                severity={notificationType}
                variant="filled"
                icon={toastBarIcon[notificationType]}
                sx={{ width: "100%" }}
            >
                <AlertTitle>{title}</AlertTitle>
                <Typography variant="body2">{description}</Typography>
            </Alert>
        </Snackbar>
    );
}
