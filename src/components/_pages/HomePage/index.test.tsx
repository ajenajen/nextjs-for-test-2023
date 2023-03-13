import { render, screen } from "@testing-library/react";
import { describe, expect } from "jest-without-globals";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import HomePage from "./index";
import { mockUpUsers } from "./_data";

describe("HomePage", () => {
  it("renders default sort is FIRST NAME", () => {
    render(
      <ThemeProvider theme={theme}>
        <HomePage data={mockUpUsers?.data} total={mockUpUsers?.total} />
      </ThemeProvider>
    );

    const sortLabelFirstname = screen.getByRole("input", {
      name: /FIRST NAME/i,
    });

    expect(sortLabelFirstname).toBeInTheDocument();
  });
});
