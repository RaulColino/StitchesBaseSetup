// stitches.config.ts
import { createStitches } from "@stitches/react";
import { untitledUIColors } from "./src/theme/untitled-ui-colors";
import { cssReset } from "./src/theme/css-reset";

function rem(arg0: number): any {
  //function to get a number number and return a string with the number and rem
  return `${arg0}rem`;
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  //You can define your tokens as part of the createStitches configuration. There are 14 token types available.
  //   export const { styled, css } = createStitches({
  //   theme: {
  //     colors: {},
  //     space: {},
  //     fontSizes: {},
  //     fonts: {},
  //     fontWeights: {},
  //     lineHeights: {},
  //     letterSpacings: {},
  //     sizes: {},
  //     borderWidths: {},
  //     borderStyles: {},
  //     radii: {},
  //     shadows: {},
  //     zIndices: {},
  //     transitions: {},
  //   },
  // });

  //Default theme (light)
  theme: {
    //A simple color palette should contain both neutral, primary, and accent colors.
    //It's also good to include feedback colors (green for success and red for failure) - especially if forms are an essential part of the functionality.
    colors: {
      ...untitledUIColors.defaultGray,
      ...untitledUIColors.defaultPrimary,
      ...untitledUIColors.defaultSuccess,
      ...untitledUIColors.defaultWarning,
      ...untitledUIColors.defaultError,
      ...untitledUIColors.grayBlue,

      //Primary Colors: The primary color is your "brand" color. and is used across
      //all interactive elements such as buttons, links, inputs, etc.
      // This color can define the overall feel and can elicit emotion.
      //You can have more than one primary color, but start with one.
      primary: untitledUIColors.defaultSuccess.defaultSuccess500,

      //Accent Colors: These act as "secondary" or "supporting" colors to you primary color.
      //These are useful for grabbing attention or to support your primary/brand color
      //They're also useful for components such as labels and badges.
      secondary: "$defaultPrimary800",
      tertiary: untitledUIColors.grayBlue.grayBlue500,

      //Neutral Colors: Gray is a neutral color and is the foundation of the color system.
      //Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray.
      //
      //Base: These are base black and white color styles to quickly swap out if you need to.
      black: untitledUIColors.black,
      white: untitledUIColors.white,
      gray: untitledUIColors.defaultGray.defaultGray500,
      //
      background: "$defaultGray50",
      secondaryBackground: "$defaultGray100",
      text: untitledUIColors.defaultGray.defaultGray500,
      //Outline: input fields border color, etc.
      outline: untitledUIColors.defaultGray.defaultGray300,
      //
      divider: untitledUIColors.defaultGray.defaultGray200,

      //Feedback Colors: Feedback colors emphasis different semantic states.
      //They're used to provide visual feedback and/or warnings to users as they use your interface.
      //
      //Error colors are used across error states and in "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.
      error: untitledUIColors.defaultError.defaultError500,
      //Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users' attention.
      warning: untitledUIColors.defaultWarning.defaultWarning500,
      //Success colors communicate a positive action, postive trend, or a successful confirmation. If you're using green as your primary color, it can be helpful to introduce a different hue for your success green.
      success: untitledUIColors.defaultSuccess.defaultSuccess500,
    },
    space: {
      n: rem(0),
      0: rem(2),
      1: rem(4),
      2: rem(8),
      3: rem(16),
      4: rem(32),
      5: rem(64),
      6: rem(128),
      7: rem(192),
      8: rem(256),
      9: rem(320),
    },
    sizes: {
      fontBody: rem(0.9),
      n: rem(0),
      "0,5rem": rem(0.5),
      "1rem": rem(1),
      "2rem": rem(2),
      "3rem": rem(3),
      0: rem(4),
      "5rem": rem(5),
      1: rem(8),
      2: rem(12),
      3: rem(16),
      4: rem(20),
      5: rem(24),
      6: rem(28),
      7: rem(32),
      8: rem(36),
      9: rem(40),
      10: rem(44),
      11: rem(48),
      12: rem(52),
      13: rem(56),
      14: rem(60),
      15: rem(64),
      16: rem(68),
      17: rem(72),
      18: rem(76),
      19: rem(80),
      20: rem(84),
      21: rem(88),
      22: rem(92),
      23: rem(96),
      24: rem(100),
      25: rem(104),
      26: rem(108),
      27: rem(112),
      28: rem(116),
      29: rem(120),
      30: rem(124),
      31: rem(152),
      32: rem(184),
      33: rem(200),
      34: rem(224),
      35: rem(256),
      36: rem(320),
    },
    fontSizes: {
      h1: rem(48),
      h2: rem(40),
      h3: rem(32),
      h4: rem(28),
      h5: rem(23),
      h6: rem(19),
      body: rem(16),
      bodySm: rem(14),
      caption: rem(13),
      footnote: rem(11),
    },
    fonts: {
      display: "'Hind Madurai', sans-serif",
      body: "'Hind Madurai', sans-serif",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      n: rem(0),
      0: rem(16),
      1: rem(24),
      2: rem(32),
      3: rem(40),
      4: rem(48),
      5: rem(56),
      6: rem(64),
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    borderWidths: {
      light: "1px",
      normal: "2px",
      bold: "3px",
      extrabold: "4px",
      black: "5px",
    },
    radii: {
      xs: "5px",
      sm: "7px",
      md: "12px",
      base: "14px",
      lg: "14px",
      xl: "45px",
      squared: "33%",
      rounded: "50%",
      pill: "9999px",
    },
    shadows: {
      default: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      a11y: "0 0 0 3px rgba(66,153,225,0.6)",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      5: "500",
      10: "1000",
      max: "9999",
    },
    transitions: {
      default: "all 250ms ease",
    },
    breakpoints: {
      n: "0px",
      xs: "650px",
      sm: "960px",
      md: "1280px",
      lg: "1400px",
      xl: "1920px",
    },
    media: {
      "@n": "(min-width: 0px)",
      "@xs": "(min-width: 650px)",
      "@sm": "(min-width: 960px)",
      "@md": "(min-width: 1280px)",
      "@lg": "(min-width: 1400px)",
      "@xl": "(min-width: 1920px)",
    }
  },
});

//dark theme
export const darkTheme = createTheme("dark", {
  colors: {
    //Primary Colors: The primary color is your "brand" color. and is used across
    //all interactive elements such as buttons, links, inputs, etc.
    // This color can define the overall feel and can elicit emotion.
    //You can have more than one primary color, but start with one.
    primary: untitledUIColors.defaultPrimary.defaultPrimary300,

    //Accent Colors: These act as "secondary" or "supporting" colors to you primary color.
    //These are useful for grabbing attention or to support your primary/brand color
    //They're also useful for components such as labels and badges.
    secondary: untitledUIColors.grayBlue.grayBlue500,
    tertiary: untitledUIColors.grayWarm.grayWarm500,

    //Neutral Colors: Gray is a neutral color and is the foundation of the color system.
    //Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray.
    //
    background: untitledUIColors.defaultGray.defaultGray900,
    secondaryBackground: untitledUIColors.defaultGray.defaultGray800,
    text: untitledUIColors.defaultGray.defaultGray100,
    //Outline: input fields border color, etc.
    outline: untitledUIColors.defaultGray.defaultGray500,
    //Divider: divider color, etc.
    divider: untitledUIColors.defaultGray.defaultGray700,

    //Feedback Colors: Feedback colors emphasis different semantic states.
    //They're used to provide visual feedback and/or warnings to users as they use your interface.
    //
    //Error colors are used across error states and in "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.
    error: untitledUIColors.defaultError.defaultError500,
    //Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users' attention.
    warning: untitledUIColors.defaultWarning.defaultWarning500,
    //Success colors communicate a positive action, postive trend, or a successful confirmation. If you're using green as your primary color, it can be helpful to introduce a different hue for your success green.
    success: untitledUIColors.defaultSuccess.defaultSuccess500,
  },
  space: {},
  fonts: {},
});

//For handling things like global resets, you can write global CSS styles.
//The globalCss function will return another function, which you must call in your app.
//global theme styles common between light and dark themes to dont duplicate code
export const injectGlobalStyles = globalCss({
  //css reset
  ...cssReset,

  //colors
  colors: {
    black: untitledUIColors.black,
    white: untitledUIColors.white,
  },

  body: {
    // font-family here
    fontFamily: "$body",
  },
});
