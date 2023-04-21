import { styled } from "@stitches/react";

export const Button = styled("button", {
  height: "25px",
  px: "10px",
  fontSize: "13px",
  fontWeight: 500,

  variants: {
    size: {
      normal: {
        borderRadius: "10px",
        height: "50px",
        px: "30px",
        fontSize: "20px",
        lineHeight: "5px",
        cursor: "pointer",
        padding: "10px",
      },
    },
    variant: {
      primary: {
        $$color: "$colors$primary",
        backgroundColor: "$$color",
        "&:hover": {
          $$color: "$colors$tertiary",
        },
      },
      secondary: {},
      outlined: {},
    },
  },

  defaultVariants: {
    size: "normal",
    variant: "primary",
  },
});
