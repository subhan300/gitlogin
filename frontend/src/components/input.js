import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export  function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={props.title} variant="outlined" />

    </Box>
  );
}
