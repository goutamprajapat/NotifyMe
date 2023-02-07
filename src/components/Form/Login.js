import React, { useState } from "react";
import {
   Box,
   TextField,
   Typography,
   Divider,
   Button,
   Grid,
   InputAdornment,
   IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import image from "../../Images/login.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   return (
      <>
         <Box
            position="fixed"
            className="bg"
            sx={{ top: 0, width: "100%", height: "100vh" }}
         ></Box>
         <Grid
            Elevation
            container
            justifyContent="center"
            maxWidth="md"
            alignItems="center"
            className="colorgradiant"
            mt={{ xs: "0", md: "22vh" }}
         >
            <Grid item xs={12} md={6}>
               <Box display="flex" justifyContent="center" alignItem="center">
                  <form
                     noValidate
                     autoComplete="off"
                     m={3}
                     p={4}
                     className="center"
                  >
                     <Typography
                        variant="h4"
                        textAlign="center"
                        sx={{ fontWeight: "bolder" }}
                     >
                        Login
                     </Typography>
                     <TextField
                        id="standard-basic"
                        label="Username"
                        type="text"
                        margin="normal"
                        fullWidth
                        color="primary"
                     />
                     <TextField
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="end">
                                 <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                       setShowPassword(!showPassword)
                                    }
                                    edge="end"
                                 >
                                    {showPassword ? (
                                       <Visibility />
                                    ) : (
                                       <VisibilityOff />
                                    )}
                                 </IconButton>
                              </InputAdornment>
                           ),
                        }}
                     />
                     <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        fullWidth
                        disableElevation
                        onClick={() => navigate("/")}
                     >
                        Login
                     </Button>
                     <Divider>or</Divider>
                     <Button
                        disableElevation
                        variant="contained"
                        size="large"
                        color="secondary"
                        fullWidth
                        onClick={() => navigate("/logout")}
                     >
                        Signup
                     </Button>
                  </form>
               </Box>
            </Grid>
            <Grid
               item
               xs={12}
               md={5}
               container
               direction="row"
               justifyContent="center"
               alignItems="center"
            >
               <Box
                  component="img"
                  alt="image"
                  src={image}
                  maxWidth={"100%"}
                  p={4}
                  object-fit
               ></Box>
            </Grid>
         </Grid>
      </>
   );
};

export default Login;
