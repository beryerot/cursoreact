import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import CartWidgetContainer from './cartWidgetContainer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';

import { db } from '../firebase/firebaseconfig';
import { collection, query, getDocs } from "firebase/firestore";

const NavBar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "items"));
      const docs = [];
      const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) =>{
        docs.push({...doc.data()});
      });
      const arrCat = docs.map((item => {
        return item.category
    }))
    const dataArr = new Set(arrCat);
    let result = [...dataArr];

      setCategories(result)
      };
      getItems();
    }, [])
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
<AppBar position="sticky" style={{background: "black", marginBottom: "40px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Tienda de arte
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category} onClick={handleCloseNavMenu}>
                  <Link to ={`/category/${category}`} style={{color: 'black', textDecoration: 'none'}}>
                  <Typography textAlign="center">{category}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{margin: '50', flexGrow: 1, display: { xs: 'flex', md: 'none' }, marginRight: '30px' }}
          >
            Tienda de arte
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {categories.map((category) => (
              <Link to ={`/category/${category}`} style={{color: 'white', textDecoration: 'none'}} key={category}>
              <Button
                key={category}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', }}
              >
                {category}
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <CartWidgetContainer />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Link to="/cart">
          <ShoppingCartIcon sx={{ color: grey[50], marginLeft: 1 }} />
          </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
