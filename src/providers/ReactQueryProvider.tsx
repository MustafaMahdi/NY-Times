"use client";
import { useContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ToastContext from "../contexts/toast-context";

export default function ReactQueryProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { showToastBar } = useContext(ToastContext);

    const errorHandler = (error: any) => {
        if (error.status === 403) {
            return showToastBar({
                title: "Error",
                description: "You are not authorized to perform this action.",
                notificationType: "error",
            });
        }
        if (error.status === 400 || error.status === 409) {
            return showToastBar({
                title: "Warning",
                description: `${error.message}`,
                notificationType: "warning",
            });
        }
        return showToastBar({
            title: "Error",
            description: `${error.message}`,
            notificationType: "error",
        });
    };
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        onError: (error: any) => {
                            errorHandler(error);
                        },
                    },
                    mutations: {
                        onError: (error: any) => {
                            errorHandler(error);
                        },
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
