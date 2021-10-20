import { Button, TextField } from '@material-ui/core'
import React from 'react'

const Login = () => {
    return (
        <div>
            


      <TextField
      
      label="Name"
      variant="outlined"
      margin="normal"
      fullWidth
      />  

      <TextField 
      fullWidth
      label="Address"
      variant="outlined"
      margin="normal"
      /> 

<TextField
    
      label="Pincode"
      variant="outlined"
      margin="normal"
      fullWidth
      />  

<TextField
      label="Mobile Number"
      variant="outlined"
      margin="normal"
      fullWidth
      />  
      <TextField
    
      label="Email id"
      variant="outlined"
      margin="normal"
      fullWidth
      />  

      <TextField
      type="password"
      label="Enter Password"
      variant="outlined"
      margin="normal"
      fullWidth
      />  

<TextField
      type="password"
      label="Confirm Password"
      variant="outlined"
      margin="normal"
      fullWidth
      />  

      <Button
      margin="normal"
      color="primary"
        fullWidth
        variant="contained"> LOGIN </Button>
        </div>
    )
}

export default Login
