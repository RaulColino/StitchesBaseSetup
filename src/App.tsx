import { useContext } from "react";
import { StitchesAppContainer } from "./StitchesAppContainer";
import Example from "./components/Example";
import { ThemeChangerContext } from "./theme/ThemeChanger";
import {
  injectGlobalStyles,
  theme as lightTheme,
  darkTheme,
} from "../stitches.config";

function App() {
  injectGlobalStyles();
  const { appTheme } = useContext(ThemeChangerContext);

  return (
    <StitchesAppContainer
      className={appTheme === darkTheme.className ? darkTheme : lightTheme}
    >
      <Example />
    </StitchesAppContainer>
  );
}

export default App;
