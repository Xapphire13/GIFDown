import React from "react";
import ReactDom from "react-dom";
import WithStylesContext from "react-with-styles/lib/WithStylesContext";
import AphroditeInterface from "react-with-styles-interface-aphrodite"
import Theme from "./Theme";
import Popup from "./Popup";

const reactRoot = document.createElement("div");
document.body.appendChild(reactRoot);
document.body.style.margin = "0";
document.body.style.color = Theme.color.primary;

function Bootstrap() {
  return <WithStylesContext.Provider
    value={{
      stylesInterface: AphroditeInterface,
      stylesTheme: Theme
    }}
  >
    <Popup />
  </WithStylesContext.Provider>;
}

ReactDom.render(<Bootstrap />, reactRoot);