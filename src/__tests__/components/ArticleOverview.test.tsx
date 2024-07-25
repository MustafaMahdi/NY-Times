import { render, screen } from "@testing-library/react";
import { ArticleOverview } from "/Users/mahdi/Documents/ny-times/src/components/ArticleOverview";

describe("ArticleOverview", () => {
    it("renders the title and content", () => {
        const title = "Test Title";
        const content = "Test content here.";
        render(<ArticleOverview title={title} content={content} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it("renders title with h3 variant and content with h6 variant and correct style", () => {
        const title = "Another Test Title";
        const content = "Another test content.";
        render(<ArticleOverview title={title} content={content} />);

        const titleElement = screen.getByText(title);
        const contentElement = screen.getByText(content);

        expect(titleElement).toHaveClass("MuiTypography-h3");
        expect(contentElement).toHaveClass("MuiTypography-h6");
        expect(contentElement).toHaveStyle("alignSelf: start");
    });
});
