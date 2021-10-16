import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Login from './Login';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function NavBar() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <div style={{flexGrow: '1'}}>
            <StyledLink to="/"><Button color="inherit">Home</Button></StyledLink>
            <StyledLink to="/invitations"><Button color="inherit">Invitations</Button></StyledLink>
          </div>
          <Login/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
