import * as React from "react";
import {
   AppBar,
   Box,
   Toolbar,
   IconButton,
   Typography,
   Menu,
   MenuItem,
   Tooltip,
   Button,
   Avatar,
   Container,
} from "@mui/material";
import { ViewDayOutlined } from "@mui/icons-material";
import logo from "../../Images/AppBarLogo.png";
import { NavLink,Outlet } from "react-router-dom";

const pages = [
   { to: "/", title: "HOME" },
   { to: "/pricing", title: "Pricing" },
   { to: "/blog", title: "Blog" },
];
const settings = [
   { to: "/profile", title: "Profile" },
   { to: "/account", title: "Account" },
   { to: "/dashboard", title: "Dashboard" },
   { to: "/login", title: "Login" },
   { to: "/logout", title: "Logout" },
];

const Header = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

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

   return (
      <>
      <AppBar position="static" elevation={0} color="bg">
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: { xs: "none", md: "flex" },
                     fontFamily: "monospace",
                     fontWeight: 700,
                     letterSpacing: ".3rem",
                     color: "inherit",
                     textDecoration: "none",
                  }}
               >
                  <Box
                     component="img"
                     alt="image"
                     src={logo}
                     maxWidth={"30%"}
                     object-fit
                  ></Box>
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <ViewDayOutlined />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: "block", md: "none",mt: "45px"  },
                     }}
                  >
                     {pages.map((page) => {
                        return (
                           <MenuItem
                              key={page.title}
                              onClick={handleCloseNavMenu}
                           >
                              <Typography
                                 as={NavLink}
                                 to={page.to}
                                 textAlign="center"
                                 color="inherit"
                              >
                                 {page.title}
                              </Typography>
                           </MenuItem>
                        );
                     })}
                  </Menu>
               </Box>

               <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                     mr: 2,
                     display: { xs: "flex", md: "none" },
                     flexGrow: 1,
                     fontFamily: "monospace",
                     fontWeight: 700,
                     letterSpacing: ".3rem",
                     color: "inherit",
                     textDecoration: "none",
                  }}
               >
                  <Box
                     component="img"
                     alt="image"
                     src={logo}
                     maxWidth={"30%"}
                     object-fit
                  ></Box>
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => {
                     return (
                        <Button
                           as={NavLink}
                           to={page.to}
                           key={page.title}
                           onClick={handleCloseNavMenu}
                           sx={{ my: 2, color: "black", display: "block" }}
                        >
                           {page.title}
                        </Button>
                     );
                  })}
               </Box>

               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/2.jpg"
                        />
                     </IconButton>
                  </Tooltip>
                  <Menu
                     sx={{ mt: "45px" }}
                     id="menu-appbar"
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                  >
                     {settings.map((setting) => {
                        return (
                           <MenuItem
                              key={setting.title}
                              onClick={handleCloseUserMenu}
                           >
                              <Typography
                                 textAlign="center"
                                 as={NavLink}
                                 to={setting.to}
                                 color="primary"
                              >
                                 {setting.title}
                              </Typography>
                           </MenuItem>
                        );
                     })}
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
      <Outlet/>
      </>
   );
};
export default Header;
