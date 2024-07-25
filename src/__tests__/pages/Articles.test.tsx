import { render, screen } from "@testing-library/react";
import * as hooks from "../../hooks/useGetArticles";
import { Articles } from "../../pages";
import { IArticle } from "../../types";

// Mock the useGetArticles hook
jest.mock("../../hooks/useGetArticles");

describe("Articles Component", () => {
    const mockArticles: IArticle[] = [
        {
            id: 1,
            title: "Article 1",
            abstract: "abstract 1",
            image: "image 1",
            url: "url 1",
            caption: "caption 1",
            updated: "updated 1",
            byline: "byline 1",
            source: "source 1",
        },
        {
            id: 2,
            title: "Article 2",
            abstract: "abstract 2",
            image: "image 2",
            url: "url 2",
            caption: "caption 2",
            updated: "updated 2",
            byline: "byline 2",
            source: "source 2",
        },
    ];

    it("should display loading when articles are being fetched", () => {
        jest.spyOn(hooks, "useGetArticles").mockReturnValue({
            isLoading: true,
            data: null,
        } as any);
        render(<Articles />);
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    it("should display articles when fetched", () => {
        jest.spyOn(hooks, "useGetArticles").mockReturnValue({
            isLoading: false,
            data: mockArticles,
        } as any);
        render(<Articles />);
        const titleElement1 = screen.getByText(mockArticles[0].title);
        expect(titleElement1).toBeInTheDocument();
        const titleElement2 = screen.getByText(mockArticles[1].title);
        expect(titleElement2).toBeInTheDocument();
    });

    it("should handle empty articles list", () => {
        jest.spyOn(hooks, "useGetArticles").mockReturnValue({
            isLoading: false,
            data: [],
        } as any);
        render(<Articles />);
        expect(screen.queryByRole("article")).toBeNull();
    });
});
