import { render, screen } from "@testing-library/react";
import { describe, expect } from "jest-without-globals";
import AppItem from "./";

const mockUpData = {
  id: 1,
  email: "george.bluth@reqres.in",
  first_name: "George",
  last_name: "Bluth",
  avatar: "https://reqres.in/img/faces/1-image.jpg",
};

describe("AppItem Component", () => {
  it("renders FIRST NAME", async () => {
    render(<AppItem data={mockUpData} />);

    const firstname = screen.getByTestId(/user-first_name/i);
    const lastname = screen.getByTestId(/user-last_name/i);
    const email = screen.getByTestId(/user-email/i);
    expect(firstname.innerHTML).toBe("<strong>First Name </strong>George");
    expect(lastname.innerHTML).toBe("<strong>Last Name </strong>Bluth");
    expect(email.innerHTML).toBe(
      "<strong>Email </strong>george.bluth@reqres.in"
    );
  });
});
