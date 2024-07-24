import ReactQueryProvider from "./ReactQueryProvider";
import ToastProvider from "./ToastProvider";

export default function ProviderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ToastProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
        </ToastProvider>
    );
}
