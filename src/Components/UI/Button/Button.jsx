import React from 'react';
import Buttonui from '@material-ui/core/Button';

import { MuiThemeProvider , createMuiTheme } from '@material-ui/core/styles';


function Button(props) {
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ffe57f',
        main: '#ffd740',
        dark: '#ffab00',
        contrastText: '#6c4f30',
      }
    },
  });
  
  return (
    <MuiThemeProvider theme={theme}>
      <Buttonui boxShadow={3} variant="contained" color="primary" onClick={props.click}>
        {props.value}
      </Buttonui>
    </MuiThemeProvider>
  );
}

export default Button;