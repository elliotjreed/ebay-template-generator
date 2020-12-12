import * as React from "react";
import { ReactElement } from "react";

export const TopBar = (): ReactElement => {
  return (
    <section className="hero">
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <span className="navbar-item">
            <h1>eBay Template Generator</h1>
          </span>
        </div>
      </nav>
    </section>
  );
};
