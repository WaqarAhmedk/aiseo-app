import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Logo from "../public/Initial_Letter_D_Digital_Logo_Design_Template-removebg-preview (1) 1.png";
import useAuth from '../context/AuthContext';
import userpic from '../public/user-picture.png'
import dashstyling from '../styles/Dashboard.module.css'
import useTranslation from 'next-translate/useTranslation';
import Link from "next/link";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openprofile, setOpenProfile] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const setCookie = (locale) => {
    document.cookie = `NEXT_LOCALE = ${locale}; max - age=31536000; path = /`
  }
  const { logout, user } = useAuth();
  const { t } = useTranslation('dashboard');

  const settings = [t("setting-profile"), t("setting-account"), t("setting-logout"),
  <>
    <Link className='mr-2' href="/dashboard" locale="en" onClick={() => {
      setCookie("en")
    }}>
      English
    </Link>
    <Link className='mr-2' href="/dashboard" locale="de" onClick={() => {
      setCookie("de")
    }}>
      German
    </Link>
    <Link className='mr-2' href="/dashboard" locale="es" onClick={() => {
      setCookie("es")
    }}>
      Spanish

    </Link>
  </>];
  return (
    <>
      <AppBar position="static" className={dashstyling.appbar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Image src={Logo} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >

              </IconButton>

            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Image src={Logo} />
            </Typography>


            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={userpic} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => {

                  
                    if (setting === 'Logout') {
                      logout();
                    } else if (setting === 'Profile') {
                      setOpenProfile(true);
                    }

                    handleCloseUserMenu()
                  }}>
                    <Typography textAlign="center" >{setting}</Typography>
                  </MenuItem>

                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>);
}
export default ResponsiveAppBar;