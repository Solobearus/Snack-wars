import React from 'react';
import Buttonui from '@material-ui/core/Button';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


function Button(props) {
  
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        light: window.getComputedStyle(document.documentElement)
          .getPropertyValue('--light-main'), // #999999,
        main: window.getComputedStyle(document.documentElement)
          .getPropertyValue('--light-main'), // #999999,
        dark: window.getComputedStyle(document.documentElement)
          .getPropertyValue('--medium-main'), // #999999,
        contrastText: window.getComputedStyle(document.documentElement)
          .getPropertyValue('--title-main'), // #999999,
      }
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Buttonui boxshadow={3} variant="contained" color="primary" onClick={props.click}>
        {props.value}
      </Buttonui>
    </MuiThemeProvider>
  );
}

export default Button;