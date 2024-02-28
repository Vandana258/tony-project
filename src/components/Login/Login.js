import react from 'react';
import {Grid , CardMedia, Typography,FormControlLabel, Checkbox, Divider, link} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {Box} from '@mui/material';
import {Link} from 'react-router-dom';
// @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
import './Login.css';


function Login(){
    return(
        <Grid className="container full-container">
            <Grid className='small-container'>
                <Grid className='container-item text'>
                    <Grid className='mt-10'>
                        <Grid className='tagline'>
                            <Typography variant="h3">WELCOME!</Typography>
                        </Grid>
                        <Grid className='connected'>
                            <Typography className='please'>To keep connected with us please login with your personal information by email address and password </Typography>
                        </Grid>
                        <Grid className='imagegrid'>
                           <CardMedia
                        className="image"
                        component="img"
                        alt="Login"
                        height=""
                        image="../assests/Images/login-animate.gif"
                     />
                     </Grid>
                    </Grid>
                </Grid>
                <Grid className='container-item form'>
                        <Grid className='content'>
                            <Typography variant='h4' className='cptl-login'>LOGIN</Typography>
                            <Typography className='login'>LOG IN AND GET BACK TO WORK</Typography>
                        </Grid>
                        <Grid className='form-group mt-4 group'>
                            <Grid className='icon black'>
                            <Box className="fa fa-user"><PersonIcon/> </Box>
                            </Grid>
                            <input type="email" name="email"  className="textField" 
                            placeholder="Username or Email" 
                            
                            />

                        </Grid>
                        <Grid className='form-group group'>
                                <Grid className='icon black'>
                                    <Box className="fa fa-lock"><LockIcon/> </Box>
                                </Grid>
                            <input type="password" name="password" className="textField " 
                                placeholder="Password"  autoComplete="off" 
                            />
                        </Grid>
                        <Grid className='control'>
                            <FormControlLabel
                                    control={<Checkbox/>}
                                    className='checkbox'
                                    label="Remember Me"
                                   
                                
                                />
                            <Typography variant="p" className="forgot" >
                                <Link to="/" className='forgot-password'>Forgot Password</Link>
                            </Typography>
                        </Grid>
                        <Grid className=" form-group-login">
                            <Link to="/" className='button'>LOGIN</Link>
                        </Grid>
                        <Divider className='divider'/>
                        <Grid className='create-account'>
                            <Typography className='color-acc'>Don't have an account?</Typography>
                                <Grid className='form-groupp form-group-signup'>
                                    <Link to="/" className='vt-primary-btn button signup-btn'>CREATE AN ACCOUNT</Link>
                                </Grid>
                        </Grid>
                </Grid>
            </Grid>
           
        </Grid>
    )
}

export default Login;