import React from "react";
import ReactDOM from "react-dom";

import MasterView from "./MasterView";

const e = React.createElement;

try {
  const navContainer = document.querySelector("#master-view");
  ReactDOM.render(e(MasterView), navContainer);
} catch (e) {}
