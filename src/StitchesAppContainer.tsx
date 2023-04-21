import { styled } from "@stitches/react";

export const StitchesAppContainer = styled("div", {
    backgroundColor: "$background",
    color: "$text",
    //this div should cover the whole screen
    minHeight: "100vh",
    width: "100vw",
    transition: "background-color ease-in 0.25s, color ease-in 0.25s",
    // "> p, div": {
    //   animation: `${goIn} ease-in 0.5s`,
    // },
  });