import { render, screen } from "@testing-library/react";
import { ArticleOwner } from "../../components";

describe("ArticleOwner", () => {
    it("renders without crashing", () => {
        render(
            <ArticleOwner
                owner="John Doe"
                source="NY Times"
                updated="April 1, 2023"
            />
        );
        expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    it("displays the owner name correctly", () => {
        render(
            <ArticleOwner
                owner="Jane Doe"
                source="NY Times"
                updated="April 1, 2023"
            />
        );
        expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    });

    it("displays the source correctly", () => {
        render(
            <ArticleOwner
                owner="John Doe"
                source="BBC News"
                updated="April 1, 2023"
            />
        );
        expect(screen.getByText("Reporting from BBC News")).toBeInTheDocument();
    });

    it("displays the updated date correctly", () => {
        render(
            <ArticleOwner
                owner="John Doe"
                source="NY Times"
                updated="March 31, 2023"
            />
        );
        expect(screen.getByText("March 31, 2023")).toBeInTheDocument();
    });

    it("displays the correct initials in the avatar", () => {
        render(
            <ArticleOwner
                owner="John Doe"
                source="NY Times"
                updated="April 1, 2023"
            />
        );
        expect(screen.getByText("JD")).toBeInTheDocument();
    });
});
