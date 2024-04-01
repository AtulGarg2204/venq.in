import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { useTheme,useMediaQuery } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';
export default function AccountMenu({name}) {
    const navigate=useNavigate();
    const URL=config.URL;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [onbcomp,setonbcomp]=React.useState(0);
    const open = Boolean(anchorEl);
    const token=JSON.parse(localStorage.getItem("userinfo"));
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const nm=name[0].toUpperCase() +
    name.slice(1);
    React.useEffect(() => {
      axios.get(`${URL}/auth/user/checkverify/${token.email}`).then((response)=>{
        console.log(response.data.isVerified);
        setonbcomp(response.data.isVerified);
      }).catch((error)=>{
        console.log(error);
      })
    }, []);

    const handleClick = (event) => {

      // console.log('click hua h');
      // console.log(event.currentTarget);
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogOut = () => {
      localStorage.removeItem("userinfo");
      // console.log('yaha par hun');
      // console.log('next line pe');
      navigate("/");
    };
    return (
      <React.Fragment>
        <div style={{
          display:'flex',
        }}>
          {isMobile && <Box>
            <Divider sx={{
              // color:'black',
              marginLeft:'16px',
              backgroundColor:'gray'
            }} />
            <Box sx={{
              display:'flex',
              paddingLeft:'4%',
              marginTop:'16px'            }}>
               
            <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ 
                marginRight:'10%',
                width: 32, height: 32,backgroundColor:'#5ECE8F' }}>

                <img style={{ width: 17 }} src='images/user.png' />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Typography sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>{name[0].toUpperCase() +
            name.slice(1)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'start', textAlign: 'center' ,flexDirection:isMobile?'row':'row', border:'2px solid #5ECE8F',
            paddingTop:'5px',
            paddingBottom:'5px',
            marginTop:'16px',
            paddingLeft:'18px',
            marginLeft:'16px',
            paddingRight:'150px',
            borderRadius:'16px',
            backgroundColor:'#E9FBF5',
            gap:'3px'}}>
            <img style={{
                        height:'20px',
                        cursor:'pointer',
                      }} src='images/document.png' alt='notfound'/>
            <Typography sx={{ 
            fontSize:'14px',
            width:'140px',
            color:'#5ECE8F',
            cursor:'pointer',
           }}>Complete KYC</Typography>
           <img style={{
                        height:'20px',
                        cursor:'pointer',
                      }} src='images/next.png' alt='notfound'/>
            </Box>
            </Box>}
            {!isMobile && <>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection:isMobile?'column':'row' }}>
                {onbcomp!=20 &&  <Box onclick={()=>{
                  navigate('/dashboard/profile')
                }} sx={{ display: 'flex', alignItems: 'start', textAlign: 'center' ,flexDirection:isMobile?'row':'row', border:'2px solid #5ECE8F',
            paddingTop:'5px',
            paddingBottom:'5px',
            paddingLeft:'18px',
            paddingRight:'18px',
            borderRadius:'16px',
            backgroundColor:'#E9FBF5',
            gap:'3px'}} >
            <img style={{
                        height:'20px',
                        cursor:'pointer',
                      }} src='images/document.png' alt='notfound'/>
            <Typography sx={{ 
            fontSize:'14px',
            width:'140px',
            color:'#5ECE8F',
            cursor:'pointer',
           }}>Complete KYC</Typography>
           <img style={{
                        height:'20px',
                        cursor:'pointer',
                      }} src='images/next.png' alt='notfound'/>
            </Box>}
            
         
          <Typography sx={{ width:'100px',
        cursor:'pointer',fontWeight:'bold',marginRight:'5px',marginLeft:'5%'}}>{name[0].toUpperCase() +
            name.slice(1)}</Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ 
                marginRight:'40px',
                width: 32, height: 32,backgroundColor:'#5ECE8F' }}>

                <img style={{ width: 17 }} src='images/user.png' />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
            </>}
        
        
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        // sx={{
        //   backgroundColor:'black'
        // }}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>{
            navigate("/dashboard/properties");
        }}>
          <ListItemIcon>
          <img style={{ width: 17 }} src='images/dashboard.png' /> 
          </ListItemIcon>
          Dashboard
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>{
            navigate("/dashboard/profile");
        }}>
          <Avatar /> My Profile
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

        </div>
        
    </React.Fragment>
);
}
  
  