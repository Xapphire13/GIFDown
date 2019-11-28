import React from "react";
import { Styles } from "react-with-styles";
import useStyles from "react-with-styles/lib/hooks/useStyles";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import Theme from "./Theme";

function stylesFn({ color }: typeof Theme): Styles {
  return {
    container: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: color.background.modal
    },
    text: {
      fontWeight: "bold",
      fontSize: 16
    }
  }
}

export default function CopiedOverlay() {
  const { css, styles } = useStyles({ stylesFn });

  return <div {...css(styles.container)}>
    <Stack verticalFill verticalAlign="center" horizontalAlign="center">
      <span {...css(styles.text)}>Link copied!</span>
    </Stack>
  </div>;
}