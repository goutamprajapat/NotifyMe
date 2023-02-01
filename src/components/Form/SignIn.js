import React from "react";
import {
   Box,
   TextField,
   Typography,
   Divider,
   Button,
   Grid,
} from "@mui/material";
import image from "../../Images/login.svg";
const SignIn = () => {
   return (
      <Grid
         Elevation
         container
         justifyContent="center"
         maxWidth="md"
         alignItems="center"
         className="colorgradiant"
      >
         <Grid item xs={12} md={4}>
            <Box
               component="img"
               alt="image"
               src={image}
               maxWidth={"100%"}
               object-fit
            ></Box>
         </Grid>
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
                     Sign Up
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
                     id="standard-basic"
                     label="Email"
                     type="email"
                     margin="normal"
                     fullWidth
                     color="primary"
                  />
                  <TextField
                     id="standard-basic"
                     label="Phone"
                     type="number"
                     margin="normal"
                     fullWidth
                     color="primary"
                  />
                  <TextField
                     id="standard-basic"
                     label="Password"
                     type="Password"
                     margin="normal"
                     fullWidth
                     color="primary"
                  />
                  <TextField
                     Adornment
                     id="standard-password-input"
                     label="Conform Password"
                     type="Password"
                     autoComplete="current-password"
                     margin="normal"
                     color="primary"
                     fullWidth
                  />
                  <Button
                     variant="contained"
                     size="large"
                     color="primary"
                     fullWidth
                     disableElevation
                  >
                     Signup
                  </Button>
                  <Divider>or</Divider>
                  <Button
                     disableElevation
                     variant="contained"
                     size="large"
                     color="secondary"
                     fullWidth
                  >
                     Login
                  </Button>
               </form>
            </Box>
         </Grid>
      </Grid>
   );
};

export default SignIn;
