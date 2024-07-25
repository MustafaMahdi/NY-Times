import { render, screen } from "@testing-library/react";
import { Loading } from "../../components/Loading";

describe("Loading Component", () => {
    it("renders correctly with default height", () => {
        render(<Loading />);
        const boxComponent = screen.getByRole("progressbar");
        expect(boxComponent).toBeInTheDocument();
        expect(boxComponent).toHaveStyle("height: 40px");
    });

    it("renders correctly with custom height", () => {
        const customHeight = 40;
        render(<Loading height={customHeight} />);
        const boxComponent = screen.getByRole("progressbar");
        expect(boxComponent).toBeInTheDocument();
        expect(boxComponent).toHaveStyle(`height: ${customHeight}px`);
    });
});
