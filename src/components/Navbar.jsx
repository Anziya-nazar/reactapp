import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6"   align= "left" component="div" sx={{ flexGrow: 1 }}>
           EMPLOYEE APP
          </Typography>
          <Button color="inherit"><Link to={'/list'} style={{textDecoration:"none", color:"white"}}>Home</Link></Button>
          <Button color="inherit">
          <Link to={'/form'} style={{textDecoration:"none", color:"white"}}>EmployeeForm</Link> 
            </Button>
            <Button color="inherit">
          <Link to={'/'} style={{textDecoration:"none", color:"white"}}>EmployeeDashboard</Link> 
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}