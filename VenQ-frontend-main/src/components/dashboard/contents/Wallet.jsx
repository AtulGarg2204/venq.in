import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddIcon from "@mui/icons-material/Add";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45720526.js"></script>
const Cash = styled(Box)`
  border: 1px solid lightgrey;
  background-color: white;
  display: flex;
  border-radius: 20px;
  padding: 20px;
  height: 25vh;
  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    flex-direction: column;
  }
`;

const Balance = styled(Box)`
  border: 1px solid lightgrey;
  background-color: white;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  height: 25vh;
`;

const WalletButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  font-family: "Inter";
  font-size: 18px;
  padding: 5px 20px;
  text-transform: none;
  border-radius: 10px;
  color: black;
  &:hover {
    color: white;
    background-color: #0170dc;
    border: 1px solid #0170dc;
  }
`;

const StarIcon = styled(StarOutlineRoundedIcon)`
  font-size: 120px;
  color: #0170dc;
`;

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          fontFamily: "Inter",
          backgroundColor: "black",
          textAlign: "center",
        },
      },
    },
  },
});

const info =
  "This number shows your current rewards balance. It includes all cashback rewards earned from purchases, referral bonuses, and any other promotional rewards that have not been redeemed yet. This balance can be used to invest in new properties but cannot be withdrawn as cash.";

const Transactions = styled(Box)`
  margin: 30px 0;
`;

const Header = styled(Typography)`
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
  font-family: "Inter";
`;

const TransactionTable = styled(Table)`
  background-color: white;
  border-radius: 20px;
  height: 40vh;
`;

const Head = styled(TableCell)`
  color: black;
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 30px;
  font-family: "Inter";
`;

const rows = [];

const Cards = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  height: 25vh;
`;

const Banks = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  height: 25vh;
`;

const Payment = styled(PaymentsOutlinedIcon)`
  width: 40px;
  height: 40px;
  padding: 7px;
  background-color: #ebeef4;
  border-radius: 10px;
  margin: 0 10px 0 0;
`;

const BankIcon = styled(AccountBalanceIcon)`
  width: 40px;
  height: 40px;
  padding: 7px;
  background-color: #ebeef4;
  border-radius: 10px;
  margin: 0 10px 0 0;
`;

const Wallet = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Box style={{ padding: "30px" }}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "Inter",
            padding: "0 10px 10px 0px",
            fontWeight: 600,
          }}
        >
          Wallet
        </Typography>

        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={6}>
            <Cash>
              <Box
                style={{
                  alignItems: isMobile ? "center" : "flex-start",
                  width: "100%",
                }}
              >
                <Typography
                  style={{
                    color: "rgb(112,111,111)",
                    fontSize: "18px",
                    fontFamily: "Inter",
                  }}
                >
                  Cash Balance
                </Typography>
                <Typography style={{ fontWeight: 700, fontSize: "40px" }}>
                  RUP 0
                </Typography>
              </Box>
              <Box
                style={{
                  alignItems: isMobile ? "center" : "flex-end",
                  width: "100%",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#0170dc",
                    color: "white",
                    fontFamily: "Inter",
                    padding: "5px 20px",
                    borderRadius: "10px",
                    fontSize: "18px",
                    textTransform: "none",
                    width: isMobile ? "100%" : "62%",
                  }}
                >
                  Deposit
                </Button>
                <WalletButton>Withdraw</WalletButton>
              </Box>
            </Cash>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Balance>
              <Box
                style={{
                  justifyContent: "space-evenly",
                  display: "flex",
                  flexDirection: "column",
                  flex: 6,
                  paddingLeft: "20px",
                }}
              >
                <ThemeProvider theme={theme}>
                  <Typography
                    style={{
                      color: "rgb(112,111,111)",
                      fontSize: "18px",
                      fontFamily: "Inter",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Rewards Balance
                    <Tooltip title={info} placement="top">
                      <Typography
                        style={{
                          border: "1px solid rgb(112,111,111)",
                          color: "rgb(112,111,111)",
                          display: "inline",
                          cursor: "pointer",
                          padding: "0px 6px",
                          marginLeft: "5px",
                          borderRadius: "50%",
                          fontSize: "10px",
                        }}
                      >
                        i
                      </Typography>
                    </Tooltip>
                  </Typography>
                </ThemeProvider>
                <Typography style={{ fontWeight: 700, fontSize: "40px" }}>
                  RUP 0
                </Typography>
              </Box>
              <Box
                style={{
                  flex: 6,
                  justifyContent: "flex-end",
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "20px",
                }}
              >
                <StarIcon />
              </Box>
            </Balance>
          </Grid>
        </Grid>

        {isMobile ? (
          <Transactions>
            <Header>Transactions</Header>
            <TransactionTable size="small">
              {rows.length === 0 ? (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                          flexDirection: "column",
                        }}
                      >
                        <AccessTimeIcon style={{ fontSize: "40px" }} />
                        <Typography
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            margin: "10px",
                          }}
                        >
                          No transactions yet
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ) : (
                rows.map((row) => (
                  <TableBody key={row.id}>
                    <TableRow>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.wallet}</TableCell>
                      <TableCell>{`$${row.amount}`}</TableCell>
                    </TableRow>
                  </TableBody>
                ))
              )}
            </TransactionTable>
          </Transactions>
        ) : (
          <Transactions>
            <Header>Transactions</Header>
            <TransactionTable size="small">
              <TableHead>
                <TableRow>
                  <Head>Type</Head>
                  <Head>Status</Head>
                  <Head>Date</Head>
                  <Head>Wallet</Head>
                  <Head>Amount</Head>
                </TableRow>
              </TableHead>
              {rows.length === 0 ? (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                          flexDirection: "column",
                        }}
                      >
                        <AccessTimeIcon style={{ fontSize: "40px" }} />
                        <Typography
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            margin: "10px",
                          }}
                        >
                          No transactions yet
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ) : (
                rows.map((row) => (
                  <TableBody key={row.id}>
                    <TableRow>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.wallet}</TableCell>
                      <TableCell>{`$${row.amount}`}</TableCell>
                    </TableRow>
                  </TableBody>
                ))
              )}
            </TransactionTable>
          </Transactions>
        )}


        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={6}>
            <Header>Cards</Header>
            <Cards>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Payment />
                <Typography style={{ fontFamily: "Inter", fontSize: "15px" }}>
                  Add a card to enjoy instant deposits from anywhere in the
                  world
                </Typography>
              </Box>
              <Box>
                <WalletButton style={{ width: "100%" }}>
                  <AddIcon />
                  Add new card
                </WalletButton>
              </Box>
            </Cards>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Header>Banks</Header>
            <Banks>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <BankIcon />
                <Typography style={{ fontFamily: "Inter", fontSize: "15px" }}>
                  Add a bank account to deposit from anywhere in the world
                </Typography>
              </Box>
              <Box>
                <WalletButton style={{ width: "100%" }}>
                  <AddIcon />
                  Add new bank
                </WalletButton>
              </Box>
            </Banks>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Wallet;
