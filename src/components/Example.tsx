import React, { useContext } from "react";
import { ThemeChangerContext } from "../theme/ThemeChanger";
import { Button } from "./button/Button";

type Props = {};

export default function Example({}: Props) {
  const { appTheme, toggleAppTheme } = useContext(ThemeChangerContext);
  return (
    <div>
      <Button variant="primary" onClick={toggleAppTheme}>
        {appTheme} Theme
      </Button>
    </div>
  );
}
