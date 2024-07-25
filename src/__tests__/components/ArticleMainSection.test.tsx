// 1. Import Necessary Libraries and Components
import { render, screen } from "@testing-library/react";
import { ArticleMainSection } from "/Users/mahdi/Documents/ny-times/src/components/ArticleMainSection";

describe("ArticleMainSection", () => {
    it("renders without crashing", () => {
        render(<ArticleMainSection image="test.jpg" content="Test Content" />);
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("renders the image correctly", () => {
        const testImage = "test.jpg";
        const testContent = "Test Content";
        render(<ArticleMainSection image={testImage} content={testContent} />);
        const image = screen.getByAltText(testContent);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute(
            "src",
            `${testImage}?w=248&fit=crop&auto=format`
        );
        expect(image).toHaveAttribute(
            "srcSet",
            `${testImage}?w=248&fit=crop&auto=format&dpr=2 2x`
        );
    });

    it("renders the content correctly", () => {
        const testContent = "Unique Test Content";
        render(<ArticleMainSection image="test.jpg" content={testContent} />);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });
});
