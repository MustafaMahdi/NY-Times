import { render, screen } from "@testing-library/react";
import { useHistory } from "react-router-dom";
import { ArticleDetails } from "../../pages";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: jest.fn(),
}));

const mockArticle = {
    title: "Test Title",
    abstract: "Test Abstract",
    image: "test-image.jpg",
    caption: "Test Caption",
    byline: "Test Owner",
    source: "Test Source",
    updated: "Test Date",
};

beforeEach(() => {
    (useHistory as jest.Mock).mockReturnValue({
        location: { state: mockArticle },
    });
});

test("renders ArticleDetails without crashing", () => {
    render(<ArticleDetails />);
    const titleElement = screen.getByText(mockArticle.title);
    expect(titleElement).toBeInTheDocument();
});

test("contains a divider", () => {
    render(<ArticleDetails />);
    const dividerElement = screen.getByRole("separator");
    expect(dividerElement).toBeInTheDocument();
});

test("displays correct main section", () => {
    render(<ArticleDetails />);
    expect(screen.getByText(mockArticle.caption)).toBeInTheDocument();
});

test("displays correct abstract at the bottom", () => {
    render(<ArticleDetails />);
    const abstractElements = screen.getAllByText(mockArticle.abstract);
    expect(abstractElements).toHaveLength(2);
});
