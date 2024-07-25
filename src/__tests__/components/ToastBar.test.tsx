import { render, screen } from "@testing-library/react";
import { IToastBar, ToastBar } from "../../components";

describe("ToastBar Component Tests", () => {
    const baseProps: IToastBar = {
        open: true,
        title: "Test Title",
        description: "Test Description",
        onClose: jest.fn(),
        notificationType: "success",
    };

    it("renders correctly when open", () => {
        render(<ToastBar {...baseProps} />);
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test Description")).toBeInTheDocument();
    });

    it.each([
        ["error", "ErrorRoundedIcon"],
        ["success", "CheckCircleOutlineOutlinedIcon"],
        ["warning", "WarningAmberOutlinedIcon"],
    ])(
        "displays the correct icon for %s notification type",
        (type, iconTestId) => {
            render(
                <ToastBar
                    {...baseProps}
                    notificationType={type as "success" | "error" | "warning"}
                />
            );
            expect(screen.getByTestId(iconTestId)).toBeInTheDocument();
        }
    );

    it("calls onClose callback when the auto-hide duration elapses", () => {
        jest.useFakeTimers();
        render(<ToastBar {...baseProps} duration={3000} />);
        jest.runAllTimers();
        expect(baseProps.onClose).toHaveBeenCalled();
        jest.useRealTimers();
    });
});
