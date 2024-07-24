"use client";

import { useState } from "react";
import { IToastBar, ToastBar } from "../components";
import ToastContext from "../contexts/toast-context";

const ToastProvider = ({ children }: { children: any }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [duration, setDuration] = useState<number>(5000);
    const [notificationType, setNotificationType] = useState<
        "error" | "success" | "warning"
    >("success");
    const [open, setOpen] = useState<boolean>(false);

    const showToastBar = ({
        title,
        description,
        notificationType,
        duration,
    }: IToastBar) => {
        setTitle(title);
        setDescription(description);
        setNotificationType(notificationType);
        if (duration) setDuration(duration);
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ToastContext.Provider
                value={{
                    showToastBar,
                }}
            >
                {children}
            </ToastContext.Provider>
            <ToastBar
                open={open}
                onClose={onClose}
                title={title}
                description={description}
                notificationType={notificationType}
                duration={duration}
            />
        </>
    );
};

export default ToastProvider;
