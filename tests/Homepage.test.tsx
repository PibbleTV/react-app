import { render, screen } from "@testing-library/react";
import Homepage from "../src/pages/homepage";
import "@testing-library/jest-dom";

describe("Homepage Component", () => {
  test("renders the homepage with navigation links", () => {
    render(
        <Homepage />
    );
    
    expect(screen.getByRole('heading', { name: 'Leaderboard' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument();

  });

});