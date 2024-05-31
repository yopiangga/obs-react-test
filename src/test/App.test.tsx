import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "src/App";

it("renders main page", () => {
  render(<App />);
  expect(screen.getByText("Prisma Dashboard")).toBeInTheDocument();
});
