import * as React from "react";
import { ReactElement } from "react";

import Form from "./Form";
import "./../assets/scss/App.scss";
import { TopBar } from "./TopBar";

export const App = (): ReactElement => {
  return (
    <>
      <TopBar />
      <Form />
    </>
  );
};
