'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Theme } from './Theme'

// import BottomNavigation from './BottomNavigation'

import { DarkModeSwitch } from './DarkModeSwitch';


import { useRouter } from "next/navigation";


interface Props {
  children?: any
}

const drawerWidth = 240;
const navItems = [{label: 'About', link: '/about'}];

export default function DrawerAppBar(props: Props) {
  const router = useRouter()
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, cursor: 'pointer' }} onClick={()=>{
                router.push('/')
            }}>
        HPKE
      </Typography>
      <Divider />
      <List>
        {navItems.map(({label, link}) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: '#fff' }} onClick={()=>{
                router.push(link)
            }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Theme>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ cursor: 'pointer', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              onClick={()=>{
                router.push('/')
            }}
            >
              HPKE
            </Typography>
            <Box sx={{ mr: 2, display: { xs: 'none', sm: 'block' } } }>
              {navItems.map(({label, link}) => (
                <Button sx={{color: '#fff'}} key={label} onClick={()=>{
                  router.push(link)
              }}>
                  {label}
                </Button>
              ))}
            </Box>
            <DarkModeSwitch/>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
          <Toolbar />
          {children}
          {/* <BottomNavigation/> */}
        </Box>
      </Box>
    </Theme>

  );
}
