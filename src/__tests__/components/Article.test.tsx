import { render, screen } from "@testing-library/react";
import { Article } from "../../components";
import { IArticle } from "../../types";

describe("Article Component Tests", () => {
    const mockArticle: IArticle = {
        id: 1,
        title: "Test Article Title",
        abstract: "Test Article Abstract",
        image: "test-image-url",
        url: "example.com",
        caption: "caption",
        updated: "updated",
        byline: "byline",
        source: "source",
    };

    const mockNavigate = jest.fn();

    beforeEach(() => {
        jest.mock("react-router-dom", () => ({
            ...jest.requireActual("react-router-dom"),
            useHistory: () => ({
                push: mockNavigate,
            }),
        }));
    });

    it("renders without crashing", () => {
        render(<Article article={mockArticle} />);
        expect(screen.getByText("Test Article Title")).toBeInTheDocument();
    });

    it("displays the article title and abstract", () => {
        render(<Article article={mockArticle} />);
        expect(screen.getByText("Test Article Title")).toBeInTheDocument();
        expect(screen.getByText("Test Article Abstract")).toBeInTheDocument();
    });
});
