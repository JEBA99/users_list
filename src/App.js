import React, { useState } from 'react';
import './App.css';
import { Grid, Card, Box, Avatar, Stack, Typography, IconButton, Divider, Chip, Switch, Button, Modal, FormControl, InputLabel, Input, FormHelperText, setRef } from '@mui/material'
import { LocationOn, Edit } from '@mui/icons-material';
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
  <Grid container justify="center" spacing={spacing}>
    <Grid item md={12}>
        <Box component="h1" sx={{ m: 2, display: 'inline', float: 'left' }}>Users</Box>
        <Button variant="contained" sx={{ m: 2, display: 'inline', float: 'right' }} onClick={handleOpen}>Create Users</Button>
        <Button variant="outlined" disabled sx={{ m: 2, display: 'inline', float: 'right' }}>Actions</Button>
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
  );
}

export default App;
