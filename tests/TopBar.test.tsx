import { render, screen } from "@testing-library/react";
import * as React from "react";

import { TopBar } from "../src/components/TopBar";

describe("Top Bar", (): void => {
  it("should contain header", (): void => {
    render(<TopBar />);

    expect(screen.getByRole("heading")).toHaveTextContent("eBay Template Generator");
  });
});
