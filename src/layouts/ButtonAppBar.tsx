import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AuthContext from '../context/AuthContext';

export default function ButtonAppBar() {
  let { logoutUser }: any = React.useContext(AuthContext)

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food Table
          </Typography>
          <Button onClick={logoutUser} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}