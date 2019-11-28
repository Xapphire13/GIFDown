declare module 'react-with-styles/lib/WithStylesContext' {
  import { Context } from "react";

  const context: Context<{ stylesInterface: any, stylesTheme: any }>;
  export default context;
}

declare module 'react-with-styles/lib/hooks/useStyles' {
  import { Styles } from "react-with-styles";

  function useStyles<TStyles extends Styles>({ stylesFn }: { stylesFn: (...args: any[]) => TStyles }): {
    css: Function;
    styles: TStyles;
  }

  export default useStyles;
}

declare module 'react-with-styles-interface-aphrodite';