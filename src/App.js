import React, { useState } from 'react';
import './App.css';
import { Grid, Card, Box, Avatar, Stack, Typography, IconButton, Divider, Chip, Switch, Button, Modal, FormControl, InputLabel, Input, FormHelperText, setRef, AppBar, Container, Toolbar, MenuItem, Tooltip, Menu, Pagination, TextField, InputAdornment } from '@mui/material'
import { LocationOn, Edit } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import { grey } from '@mui/material/colors';
import avatarImage1 from './AvatarImages/avatar1.jpg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [spacing, setSpacing] = React.useState(3);
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [userCity, setUserCity] = React.useState("");
  const [userState, setUserState] = React.useState("");
  const [userDetail, setUserDetail] = React.useState({});
  const [users, setUsers] = React.useState([]);
  const [isEdit, setIsEdit] = React.useState(false);
  const [recordIndex, setRecordIndex] = React.useState("");
  const pages = ['Dashboard', 'Docs', 'Clients', 'Doc types', 'Users'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  
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

  const handleOpen = () => { 
    setOpen(true);
    setUserName("");
    setUserCity("");
    setUserState("");
  }
  const handleClose = () => { 
    setOpen(false);
    setUserName("");
    setUserCity("");
    setUserState("");
    setIsEdit(false);
  }
  const createUser = () => {
    let userDetailObject = {"name": userName, "city": userCity, "state": userState };
    userDetailObject = Object.assign({}, userDetailObject);
    setUserDetail(userDetailObject);
    users.push(userDetailObject); 
    setUsers(users);
    handleClose();
    setIsEdit(false);
  }

  const editUser = (user, index) => {
    let userDetailObject = {"name": user.name, "city": user.city, "state": user.state };
    userDetailObject = Object.assign({}, userDetailObject);
    setUserDetail(userDetailObject);
    let userArray = Object.assign([], users);
    userArray[index] = Object.assign({}, userDetailObject);
    setUsers(userArray);
    setRecordIndex(index);
    handleOpen();
    setIsEdit(true);
  }

  const updateUser = (user, index) => {
    let userDetailObject = {"name": user.name, "city": user.city, "state": user.state };
    userDetailObject = Object.assign({}, userDetailObject);
    setUserDetail(userDetailObject);
    let userArray = Object.assign([], users);
    userArray[index] = Object.assign({}, userDetailObject);
    setUsers(userArray);
    setRecordIndex(index);
    handleClose();
    setIsEdit(false);
  }

  const updateUserName = (value) => {
      userDetail.name = value;
      let userDetailObject = Object.assign({}, userDetail);
      setUserDetail(userDetailObject);
  }

  const updateUserCity = (value) => {
    userDetail.city = value;
    let userDetailObject = Object.assign({}, userDetail);
    setUserDetail(userDetailObject);
  }

  const updateUserState = (value) => {
    userDetail.state = value;
    let userDetailObject = Object.assign({}, userDetail);
    setUserDetail(userDetailObject);
  }

  return (  
    <Box>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            LOGO
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Grid container justify="center" spacing={spacing} sx={{pl: 8, pr: 8, pb: 8, pt: 4}}>
    <Grid item md={12}>
        <Box component="h1" sx={{ m: 2, display: 'inline', float: 'left' }}>Users</Box>
        <Button variant="contained" sx={{ m: 2, display: 'inline', float: 'right' }} onClick={handleOpen}>Create Users</Button>
        <Button variant="outlined" disabled sx={{ m: 2, display: 'inline', float: 'right' }}>Actions</Button>
    </Grid>
    <Grid item md={12}>
      <TextField sx={{w: 1}}
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Grid>
    {users.map((user, index) => (
      <Grid item md={4}>
        <Card key={toString(index)} variant="outlined">
          <Box sx={{ p: 2, display: 'flex' }}>
            <Avatar variant="circular" src={avatarImage1} />
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>{user.name}</Typography>
              <Typography variant="body2" color="text.secondary">
              <LocationOn sx={{color: grey[500]}} /> {user.city}, {user.state}
              </Typography>
            </Stack>
            <IconButton onClick={(event) => {editUser(user, index)}}>
              <Edit sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
          >
            <Chip>Active account</Chip>
            <Switch />
          </Stack>
        </Card>    
      </Grid>   
    ))}
    <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Box sx={style}>
       <Typography id="modal-modal-title" variant="h6" component="h2">
         Create User
       </Typography>
       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <FormControl>
           <InputLabel htmlFor="user-name">User Name</InputLabel>
           <Input id="user-name" value={(isEdit) ? userDetail.name : userName} aria-describedby="helper-text-for-user-name" sx={{ mt: 2 }} onChange={(event)=> {(isEdit) ? updateUserName(event.target.value) : setUserName(event.target.value)}}/>
           <FormHelperText id="helper-text-for-user-name">Enter the user name</FormHelperText>
         </FormControl>
         <FormControl>
           <InputLabel htmlFor="user-city">User City</InputLabel>
           <Input id="user-city" value={(isEdit) ? userDetail.city : userCity} aria-describedby="helper-text-for-user-city" sx={{ mt: 2 }} onChange={(event)=> {(isEdit) ? updateUserCity(event.target.value) : setUserCity(event.target.value)}}/>
           <FormHelperText id="helper-text-for-user-city">Enter the user city</FormHelperText>
         </FormControl>
         <FormControl>
           <InputLabel htmlFor="user-state">User State</InputLabel>
           <Input id="user-state" value={(isEdit) ? userDetail.state : userState} aria-describedby="helper-text-for-user-state" sx={{ mt: 2 }} onChange={(event)=> {(isEdit) ? updateUserState(event.target.value) : setUserState(event.target.value)}}/>
           <FormHelperText id="helper-text-for-user-state">Enter the user state</FormHelperText>
         </FormControl>
         <Box component="div" sx={{ mt: 3 }}>
           <Button variant="contained" sx={{ mx: 'auto', display: 'block', width: 200 }} onClick={(event)=> {(isEdit) ? updateUser(userDetail, recordIndex) : createUser()}}>{(isEdit) ? "Update User" : "Create User"}</Button>
         </Box>
       </Typography>
     </Box>
   </Modal>
  </Grid> 
  <Stack sx={{p: 4}}spacing={2}>
    <Pagination count={10} variant="outlined" shape="rounded" />  
  </Stack>
  </Box> 
  );
}

export default App;
