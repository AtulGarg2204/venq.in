import { Box, Button, Grid, ThemeProvider, Tooltip, Typography, createTheme, styled,Divider } from '@mui/material'
import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import config from '../../../config'
import {useNavigate} from 'react-router-dom'
const PropertyDetails = styled(Box)`
  display: flex;
  background-color: white;
  border-radius: 10px;
  height: 40vh;
`
const PaymentDetails = styled(Box)`
  background-color: white;
  border-radius: 10px;
  padding: 15px
`
const RemoveButton = styled(Button)`
  color: black;
  text-transform: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
  border: 1px solid lightgrey;
  &:hover{
    border: 1px solid red;
    background-color: red;
    color: white;
  }
`
const Decrease = styled(RemoveIcon)`
  color: #0170dc;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  font-size: 40px;
  &:hover{
    background-color: rgb(112,111,111);
    color: white;
  }
`
const Increase = styled(AddIcon)`
  color: #0170dc;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  font-size: 40px;
  &:hover{
    background-color: rgb(112,111,111);
    color: white;
  }
`
const AmountField = styled('input')`
  outline: none;
  font-family: 'Inter';
  font-weight: 600;
  width: 30%;
  align-items: center;
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 10px;
  font-size: 16px;
`
const Amount = styled(Typography)`
  font-weight: 600;
  font-family: 'Inter';
  font-size: 20px;
`
const PaymentButton = styled(Button)`
  font-family: 'Inter';
  border: 2px solid #0170dc;
  color: white;
  background-color: #0170dc;
  border-radius: 10px;
  width: 100%;
  text-decoration: none;
  &:hover{
    background-color: #0170dc;
  }  
`

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
          fontFamily: 'Inter',
          backgroundColor: 'black',
          textAlign: 'center',
        },
      },
    },
  },
});
const info = "Monthly rent is a projected average and can vary depending on maintenance requirements and occupancy status"
const info1 = "Value appreciation projections are based on a 5 year holding period"

const CartItem = (items) => {
  // console.log(items.length);
  const navigate=useNavigate();
  const URL=config.URL;
  const [quantity, setQuantity] = useState(2000)
  const increase = () => {
    setQuantity(quantity + 1000)
  }
  const decrease = () => {
    if (quantity <= 1000) {
      setQuantity(500)
    } else {
      setQuantity(quantity - 1000)
    }
  }
  
  const handlePayment=()=>{
    console.log('clicked');
    axios.post(`${URL}/phonepe/payment`).then((response)=>{
      console.log(response.data);
      window.location.href=response.data.url;
    }).catch((error)=>{
      console.log(error);
    })
  }


  return (
    <div>
      <Grid container spacing={2}>

        <Grid item xs={8}>

          <PropertyDetails>

            <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-between' }}>
              <img src="/images/signup_page.jpg" alt="propertyImage" style={{ width: '150px', height: '130px', borderRadius: '10px' }} />

              <RemoveButton>
                <DeleteOutlineIcon />
                Remove
              </RemoveButton>
            </Box>

            <Box style={{ width: '40%', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>

              <Typography style={{ fontWeight: '600', fontSize: '16px' }}>Studio in Liberty House, DIFC</Typography>

              <ThemeProvider theme={theme}>
                <Box>
                  <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
                    Monthly rent

                    <Tooltip title={info} placement="top">
                      <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
                    </Tooltip>

                  </Typography>
                  <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP 4</Typography>
                </Box>
              </ThemeProvider>

              <ThemeProvider theme={theme}>
                <Box>
                  <Typography style={{ color: 'rgb(112,111,111)', fontSize: '14px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
                    Appreciation

                    <Tooltip title={info1} placement="top">
                      <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
                    </Tooltip>

                  </Typography>
                  <Typography style={{ fontWeight: '600', fontFamily: "Inter" }}>RUP 161</Typography>
                </Box>
              </ThemeProvider>

            </Box>

            <Box style={{ display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-evenly' }}>

              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Decrease onClick={() => decrease()} />
                <AmountField
                  sx={{ m: 1, width: '20ch' }}
                  defaultValue='2000'
                  value={quantity}
                />
                <Increase onClick={() => increase()} />
              </Box>

              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <progress value={1500000} max={2000000} style={{ width: '40%' }} />
                <Typography style={{ fontFamily: 'Inter', paddingLeft: '10px', fontWeight: 600 }}>75% funded</Typography>
              </Box>

            </Box>

          </PropertyDetails>

        </Grid>

        <Grid item xs={4}>

          <PaymentDetails>

            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
              <Amount>Total</Amount>
              <Amount>RUP {quantity}</Amount>
            </Box>

            <Box>
              <PaymentButton onClick={handlePayment}>Proceed to payment</PaymentButton>
            </Box>

          </PaymentDetails>

        </Grid>

      </Grid>
    </div>
  )
}

export default CartItem