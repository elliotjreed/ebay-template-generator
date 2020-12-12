import { render, screen } from "@testing-library/react";
import * as React from "react";

import { App } from "../src/components/App";

describe("App", (): void => {
  it("should render and contain routes", (): void => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
