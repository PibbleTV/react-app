import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import Homepage from "../pages/Homepage.tsx";
import "@testing-library/jest-dom";

describe("Homepage Component", () => {
  test("renders the homepage with leaderboard and categories heading", () => {
    render(
        <Homepage />
    );

    expect(screen.getByTestId("type-text")).toHaveTextContent("Login");

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });

  test("renders the register form when toggled", async () => {
    render(
    
        <Homepage />

    );

    const toggleButton = screen.getByRole("button", {
      name: /Don't have an account\? Register/i,
    });

    await userEvent.click(toggleButton);

    expect(await screen.findByTestId("type-text")).toHaveTextContent(
      "Register"
    );

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    expect(
      screen.getByLabelText(/I accept terms and conditions/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Register/i })
    ).toBeInTheDocument();
  });
});