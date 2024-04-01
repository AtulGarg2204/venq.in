import { Box, Button, Divider, Grid, ThemeProvider, Tooltip, Typography, createTheme, styled } from '@mui/material'
import React from 'react'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Container = styled(Grid)`
  background-color: white;
  padding: 20px;
  border-radius: 20px; 
  margin: 20px 0;
  // & div{
  //   border: 2px solid black;
  // }
`
const StarIcon = styled(StarOutlineRoundedIcon)`
  font-size: 100px;
  color: #0170dc;
`
const WalletLink = styled(Link)`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  font-family: 'Inter';
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover { 
    color: #0170dc;
    text-decoration: underline;
  }
`
const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
          fontFamily: 'Inter',
          backgroundColor: '#000632',
          textAlign: 'center',
        },
      },
    },
  },
});
const info = (
  <>
    <p style={{ padding: '10px' }}>This number indicates the accumulated sum of all rewards earned since you started using the app. It includes cashback rewards, referral bonuses, and any other promotions.</p>
    <p style={{ padding: '10px' }}>Please note, this is not your current rewards balance. For your current balance please check your wallet.</p>
  </>
)
const info1 = (
  <>
    <p style={{ padding: '10px' }}>This is the lifetime cashback earned through your investments.</p>
    <p style={{ padding: '10px' }}>Cashback is credited to your rewards balance and can be used towards future investments, but cannot be withdrawn.</p>
  </>
)
const info2 = (
  <>
    <p style={{ padding: '10px' }}>This is the lifetime amount earned by inviting friends to join the app.</p>
    <p style={{ padding: '10px' }}>Share your unique referral code with friends and earn even more rewards!</p>
  </>
)
const info3 = (
  <>
    <p style={{ padding: '10px' }}>This is the lifetime amount earned from taking part in special promotions and offers within the app.</p>
    <p style={{ padding: '10px' }}>Keep an eye out for new promotions to earn even more rewards!</p>
  </>
)

const IntroLink = styled(Grid)`
  border: 0.1px solid white;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  &:hover{
    border: 0.1px solid #0170dc;
  }
`
const ReferralLink = styled(Grid)`
  border: 0.1px solid white;
  background: linear-gradient(180deg, hsla(210, 99%, 43%, 1) 0%, hsla(209, 76%, 71%, 1) 0%, hsla(210, 76%, 89%, 1) 0%, hsla(212, 76%, 95%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);
  padding: 30px;
  border-radius: 20px;
  &:hover{
    border: 0.1px solid #0170dc;
  }
`

const Rewards = ({ handleBalance }) => {

  return (
    <div>
      <Box style={{ padding: '30px' }}>

        <Typography variant='h4' style={{ fontFamily: 'Inter', padding: '0 10px 10px 0px', fontWeight: 600 }}>Rewards</Typography>

        <Container container>
          <Grid item xs>
            <Box style={{ display: 'flex', padding: '20px' }}>

              <Box style={{ flex: 6, justifyContent: 'space-around', display: 'flex', flexDirection: 'column' }}>

                <ThemeProvider theme={theme}>

                  <Typography style={{ color: 'rgb(112,111,111)', fontSize: '18px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
                    Total rewards earned

                    <Tooltip title={info} placement="bottom">
                      <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '5px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
                    </Tooltip>

                  </Typography>

                </ThemeProvider>

                <Typography style={{ fontWeight: 700, fontSize: '40px' }}>RUP 0</Typography>

                <WalletLink to='/dashboard/wallet' onClick={handleBalance}>
                  view current balance
                  <ChevronRightIcon />
                </WalletLink>
              </Box>

              <Box style={{ flex: 6, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '20px' }}>
                <StarIcon />
              </Box>

            </Box>
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item xs>
            <Box style={{ padding: '20px' }}>

              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                <Box style={{ display: 'flex', padding: '5px 0' }}>
                  <Box style={{ width: '30px', height: '30px', marginRight: '10px' }}>
                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-pawapt" aria-label="coins-inverse">
                      <g fill="none" fill-rule="nonzero" stroke="#0170dc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <g>
                          <ellipse cx="8.99811" cy="9.99909" rx="6.0025" ry="2.50104">
                          </ellipse>
                          <path d="M15.0006 13.5007C15.0006 14.882 12.3132 16.0018 8.99811 16.0018C5.68301 16.0018 2.99561 14.882 2.99561 13.5007">
                          </path>
                          <path d="M21.0035 9.99927C21.0035 11.3806 18.3161 12.5003 15.001 12.5003">
                          </path>
                          <path d="M15.0006 9.99927V17.5024C15.0006 18.8837 12.3132 20.0034 8.99811 20.0034C5.68301 20.0034 2.99561 18.8837 2.99561 17.5024V9.99927">
                          </path>
                          <path d="M21.0035 6.4978V14.0009C21.0035 15.3822 18.3161 16.502 15.001 16.502">
                          </path>
                          <path d="M9.49874 7.50804C9.20175 7.25311 9.02119 6.88837 8.99854 6.49762C8.99854 5.11705 11.6897 3.99658 15.001 3.99658C18.3124 3.99658 21.0035 5.11705 21.0035 6.49762C21.0035 7.8782 18.3124 8.99867 15.001 8.99867C14.831 8.99867 14.6609 8.99867 14.5008 8.98866">
                          </path>
                        </g>
                      </g>
                    </svg>
                  </Box>

                  <ThemeProvider theme={theme}>

                    <Typography style={{ color: 'rgb(112,111,111)', fontSize: '18px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
                      Cashback

                      <Tooltip title={info1} placement="bottom">
                        <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '10px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
                      </Tooltip>

                    </Typography>

                  </ThemeProvider>
                </Box>

                <Typography style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Inter' }}>RUP 0</Typography>
              </Box>

              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                <Box style={{ display: 'flex', padding: '5px 0' }}>
                  <Box style={{ width: '30px', height: '30px', marginRight: '10px' }}>
                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-pawapt" aria-label="user">
                      <g fill="none" fill-rule="nonzero" stroke="#0170dc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14.4749 4.52513C15.8417 5.89197 15.8417 8.10804 14.4749 9.47488C13.1081 10.8417 10.892 10.8417 9.52515 9.47488C8.15831 8.10804 8.15831 5.89197 9.52515 4.52513C10.892 3.15829 13.1081 3.15829 14.4749 4.52513 M4 18.5V19.5C4 20.052 4.448 20.5 5 20.5H19C19.552 20.5 20 20.052 20 19.5V18.5C20 15.474 16.048 13.508 12 13.508C7.952 13.508 4 15.474 4 18.5Z">
                        </path>
                      </g>
                    </svg>
                  </Box>

                  <ThemeProvider theme={theme}>

                    <Typography style={{ color: 'rgb(112,111,111)', fontSize: '18px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
                      Referrals

                      <Tooltip title={info2} placement="bottom">
                        <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '10px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
                      </Tooltip>

                    </Typography>

                  </ThemeProvider>
                </Box>

                <Typography style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Inter' }}>RUP 0</Typography>
              </Box>

              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                <Box style={{ display: 'flex', padding: '5px 0' }}>
                  <Box style={{ width: '30px', height: '30px', marginRight: '10px' }}>
                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-pawapt" aria-label="promo">
                      <g fill="none" fill-rule="nonzero" stroke="#0170dc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M8.80602 19.71H6.47102C5.26702 19.71 4.29002 18.734 4.29002 17.529V16.097C4.29002 15.519 4.06002 14.964 3.65102 14.555L2.63802 13.542C1.78602 12.69 1.78602 11.31 2.63802 10.458L3.65102 9.44502C4.06002 9.03602 4.29002 8.48202 4.29002 7.90302V6.47102C4.29002 5.26702 5.26602 4.29002 6.47102 4.29002H7.90302C8.48102 4.29002 9.03602 4.06002 9.44502 3.65102L10.458 2.63802C11.31 1.78602 12.69 1.78602 13.542 2.63802L14.555 3.65102C14.964 4.06002 15.519 4.29002 16.097 4.29002H17.529C18.733 4.29002 19.71 5.26602 19.71 6.47102V7.90302C19.71 8.48102 19.94 9.03602 20.349 9.44502L21.362 10.458C22.214 11.31 22.214 12.69 21.362 13.542L20.349 14.555C19.94 14.964 19.71 15.519 19.71 16.097V17.529C19.71 18.733 18.734 19.71 17.529 19.71H16.097C15.519 19.71 14.964 19.94 14.555 20.349L13.542 21.362C12.69 22.214 11.31 22.214 10.458 21.362L8.80602 19.71Z M9 15L15 9 M9.249 9C9.111 9 8.999 9.112 9 9.25C9 9.388 9.112 9.5 9.25 9.5C9.388 9.5 9.5 9.388 9.5 9.25C9.5 9.112 9.388 9 9.249 9 M14.749 14.5C14.611 14.5 14.499 14.612 14.5 14.75C14.5 14.888 14.612 15 14.75 15C14.888 15 15 14.888 15 14.75C15 14.612 14.888 14.5 14.749 14.5">
                        </path>
                      </g>
                    </svg>
                  </Box>

                  <ThemeProvider theme={theme}>

                    <Typography style={{ color: 'rgb(112,111,111)', fontSize: '18px', fontFamily: 'Inter', display: 'flex', alignItems: 'center' }}>
                      Promotions

                      <Tooltip title={info3} placement="bottom">
                        <Typography style={{ border: '1px solid rgb(112,111,111)', color: 'rgb(112,111,111)', display: "inline", cursor: 'pointer', padding: '0px 6px', marginLeft: '10px', borderRadius: '50%', fontSize: '10px' }}>i</Typography>
                      </Tooltip>

                    </Typography>

                  </ThemeProvider>

                </Box>

                <Typography style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Inter' }}>RUP 0</Typography>
              </Box>

            </Box>
          </Grid>
        </Container>



        <Grid container spacing={4} >

          <Grid item xs={6}>

            <IntroLink>
              <Link to='/dashboard/rewards/tier' style={{ textDecoration: 'none', color: 'black' }}>

                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", marginBottom: '10px' }}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/slash.png" alt="slash" style={{ width: '30px', height: '30px' }} />
                    <Typography style={{ fontWeight: '600', fontSize: '22px', fontFamily: 'Inter' }}>Stack Intro</Typography>
                  </Box>
                  <ChevronRightIcon />
                </Box>

                <Box style={{ margin: '10px 0' }}>
                  <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Inter' }}>RUP 0</Typography>
                    <Typography style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgb(112,111,111)' }}>Invested YTD 2023</Typography>
                  </Box>
                  <progress value={0} max={2000000} style={{ width: '100%' }} />
                </Box>

                <Box>
                  <Typography style={{ textAlign: 'center', fontSize: '15px', fontFamily: 'Inter' }}>Invest <b>RUP 25,000</b> by 12/31/2023 to reach Plus</Typography>
                </Box>

              </Link>
            </IntroLink>

          </Grid>


          <Grid item xs={6}>

            <ReferralLink>
              <Link to='/dashboard/rewards/referrals' style={{ textDecoration: 'none', color: 'black' }}>

                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box style={{ width: '30px', height: '30px' }}>
                      <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-3cy68l" aria-label="gift">
                        <g fill="none" fill-rule="nonzero" stroke="#0170dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                          <g>
                            <path d="M14 11H19.5C20.3284 11 21 10.3284 21 9.5V8.5C21 7.67157 20.3284 7 19.5 7H4.5C3.67157 7 3 7.67157 3 8.5V9.5C3 10.3284 3.67157 11 4.5 11H10">
                            </path>
                            <path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11">
                            </path>
                            <path d="M10 3V3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5V5C8 3.89543 8.89543 3 10 3Z">
                            </path>
                            <path d="M14 3V3C15.1046 3 16 3.89543 16 5V5C16 6.10457 15.1046 7 14 7H12V5C12 3.89543 12.8954 3 14 3Z">
                            </path>
                            <rect x="10" y="7" width="4" height="14" rx="1">
                            </rect>
                          </g>
                        </g>
                      </svg>
                    </Box>
                    <Typography style={{ fontWeight: '600', fontSize: '22px', fontFamily: 'Inter', paddingLeft: '10px' }}>Refer and earn</Typography>
                  </Box>

                  <ChevronRightIcon />
                </Box>

                <Typography style={{ fontFamily: 'Inter', padding: '20px 0' }}>Invite your friends and you'll both receive a rewards balance to invest in our properties!</Typography>

                <Divider />

                <Box style={{ margin: '10px 0' }}>
                  <Box style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                    <DoneIcon style={{ color: '#0170dc' }} />
                    <Typography style={{ fontFamily: 'Inter', paddingLeft: '10px' }}>
                      Friends get <b style={{ padding: '0 3px' }}>RUP 250</b> upon signing up
                    </Typography>
                  </Box>

                  <Box style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                    <DoneIcon style={{ color: '#0170dc' }} />
                    <Typography style={{ fontFamily: 'Inter', paddingLeft: '10px' }}>
                      You get <b style={{ padding: '0 3px' }}>RUP 250</b> after they invest <b style={{ padding: '0 3px' }}>RUP 2,000</b>
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '600' }}>
                    Share your link
                  </Typography>
                  <Box style={{ padding: '10px 0' }}>
                    <input
                      type="text"
                      style={{
                        outline: 'none',
                        padding: '10px',
                        border: '1px solid rgb(112, 111, 111)',
                        borderRadius: '10px',
                        width: '63%'
                      }}
                    />
                    <Button
                      style={{
                        color: 'white',
                        backgroundColor: '#0170dc',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        marginLeft: '10px'
                      }}
                    >
                      <ContentCopyIcon style={{ width: '20px', height: '20px' }} />

                      <Typography style={{
                        textTransform: 'none',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        paddingLeft: '10px'
                      }}>
                        copy link
                      </Typography>

                    </Button>
                  </Box>
                </Box>

              </Link>
            </ReferralLink>

          </Grid>


        </Grid>


      </Box >
    </div >
  )
}

export default Rewards