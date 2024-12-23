import React, { useState, useEffect } from "react";
import config from "../../../config";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  Snackbar,
  Grid,
  Chip,
  Container,
  Divider,
} from "@mui/material";
import {
  ContentCopy as CopyIcon,
  Mouse as MouseIcon,
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
// Import additional icons
import MoneyIcon from "@mui/icons-material/Money";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

// Add share handler function

const BrokerDashboard = () => {
  const [brokerStats, setBrokerStats] = useState({
    brokerInfo: [],
    brokerCode: "",
    referralLink: "",
    totalReferrals: 0,
    referredUsers: [],
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    fetchBrokerStats();
  }, []);
  const calculateCommission = (totalInvestment, commissionPercentage) => {
    return (totalInvestment * commissionPercentage) / 100;
  };
  const fetchBrokerStats = async () => {
    try {
      const userInfoString = localStorage.getItem("userinfo");
      console.log("User Info:", userInfoString);

      const userInfo = JSON.parse(userInfoString);
      console.log("Parsed User Info:", userInfo);

      const response = await fetch(
        `${config.URL}/broker/stats/${userInfo.email}`
      );
      const data = await response.json();
      console.log("API Response:", data);

      if (response.status === 403) {
        console.log("User is not a broker");
        setBrokerStats({
          brokerInfo: [],
          brokerCode: "",
          referralLink: "",
          totalReferrals: 0,
          referredUsers: [],
        });
        return;
      }

      // Update this to match your controller response structure
      setBrokerStats({
        brokerInfo: data.data.brokerInfo || [],
        brokerCode: data.data.brokerCode || "",
        referralLink: data.data.referralLink || "",
        totalReferrals: data.data.totalReferrals || 0,
        referredUsers: data.data.referredUsers || [],
      });
    } catch (error) {
      console.error("Error:", error);
      setBrokerStats({
        brokerInfo: [],
        brokerCode: "",
        referralLink: "",
        totalReferrals: 0,
        referredUsers: [],
      });
    }
  };
  const handleShare = (platform) => {
    const message = `Join Venq using my referral link!\n${brokerStats.referralLink}`;

    switch (platform) {
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(message)}`,
          "_blank"
        );
        break;
      case "telegram":
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(
            brokerStats.referralLink
          )}&text=${encodeURIComponent("Join Venq using my referral link!")}`,
          "_blank"
        );
        break;
      case "email":
        window.open(
          `mailto:?subject=${encodeURIComponent(
            "Join Venq"
          )}&body=${encodeURIComponent(message)}`,
          "_blank"
        );
        break;
      default:
        if (navigator.share) {
          navigator
            .share({
              title: "Join Venq",
              text: "Join Venq using my referral link!",
              url: brokerStats.referralLink,
            })
            .catch(console.error);
        }
    }
  };
  // Handle copy link function
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(brokerStats.referralLink);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  // Handle close snackbar function
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Box
      sx={{
        p: 4,
        background: "#f5f5f5", // Light background
        minHeight: "100vh",
        color: "#1a1a1a", // Dark text
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          color: "#14212b", // Keep brand color
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Broker Dashboard
      </Typography>

      {/* Share Link Card */}
      <Card
        sx={{
          mb: 4,
          background: "#ffffff",
          borderRadius: 2,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <ShareIcon sx={{ color: "#14212b", fontSize: 32, mb: 2 }} />
          <Typography variant="h5" sx={{ mb: 1, color: "#1a1a1a" }}>
            Share Your Referral Link
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", mb: 3 }}>
            Invite people to join Venq and earn rewards
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              value={brokerStats.referralLink}
              InputProps={{
                readOnly: true,
                sx: { bgcolor: "#f8f8f8" },
              }}
            />
            <Button
              variant="contained"
              startIcon={<CopyIcon />}
              onClick={handleCopyLink}
              sx={{
                bgcolor: "#14212b",
                "&:hover": { bgcolor: "#00bf9a" },
              }}
            >
              Copy
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => handleShare("whatsapp")}
              sx={{
                bgcolor: "#25D366",
                "&:hover": { bgcolor: "#128C7E" },
              }}
              startIcon={<WhatsAppIcon />}
            >
              WhatsApp
            </Button>
            <Button
              variant="contained"
              onClick={() => handleShare("telegram")}
              sx={{
                bgcolor: "#0088cc",
                "&:hover": { bgcolor: "#006699" },
              }}
              startIcon={<TelegramIcon />}
            >
              Telegram
            </Button>
            <Button
              variant="contained"
              onClick={() => handleShare("email")}
              sx={{
                bgcolor: "#EA4335",
                "&:hover": { bgcolor: "#B92D21" },
              }}
              startIcon={<EmailIcon />}
            >
              Email
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          {
            title: "Total Referrals",
            value: brokerStats?.totalReferrals || 0,
            icon: <GroupIcon sx={{ fontSize: 32 }} />,
            color: "#14212b",
          },
          {
            title: "Total Investment",
            value: `₹${
              brokerStats?.referredUsers
                ?.reduce((sum, user) => sum + (user.investment || 0), 0)
                .toLocaleString() || "0"
            }`,
            icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
            color: "#14212b",
          },
          {
            title: "Commission Earned",
            value: `₹${calculateCommission(
              brokerStats?.referredUsers?.reduce(
                (sum, user) => sum + (user.investment || 0),
                0
              ) || 0,
              brokerStats?.brokerInfo?.commissionPercentage || 2
            ).toLocaleString()}`,
            icon: <MoneyIcon sx={{ fontSize: 32 }} />, 
            color: "#14212b",
          },
        ].map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                background: "#ffffff",
                borderRadius: 2,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", p: 3 }}>
                <Box sx={{ color: stat.color, mb: 2 }}>{stat.icon}</Box>
                <Typography variant="h3" sx={{ color: "#1a1a1a", mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body1" sx={{ color: "#666" }}>
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Signups Table */}
      <Card
        sx={{
          background: "#ffffff",
          borderRadius: 2,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ color: "#1a1a1a", mb: 3 }}>
            Recent Signups
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#666", fontWeight: 600 }}>
                    User
                  </TableCell>
                  <TableCell sx={{ color: "#666", fontWeight: 600 }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ color: "#666", fontWeight: 600 }}>
                    Phone
                  </TableCell>
                  <TableCell sx={{ color: "#666", fontWeight: 600 }}>
                    Investment
                  </TableCell>
                  <TableCell sx={{ color: "#666", fontWeight: 600 }}>
                    Properties
                  </TableCell>
                  <TableCell sx={{ color: "#666", fontWeight: 600 }}>
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {brokerStats?.referredUsers?.map((referral, index) => (
                  <TableRow key={index} hover>
                    <TableCell>
                      {referral.user?.name || "Unknown User"}
                    </TableCell>
                    <TableCell>{referral.user?.email || "N/A"}</TableCell>
                    <TableCell>{referral.user?.phone || "N/A"}</TableCell>
                    <TableCell>
                      <Typography sx={{ fontWeight: 600, color: "#2e7d32" }}>
                        ₹{(referral.investment || 0).toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {referral.properties ? (
                        <Box>
                          {referral.properties.map((prop, idx) => (
                            <Chip
                              key={idx}
                              label={`${prop.propertyName} (${prop.quantity})`}
                              size="small"
                              sx={{ m: 0.5 }}
                            />
                          ))}
                        </Box>
                      ) : (
                        "No properties"
                      )}
                    </TableCell>
                    <TableCell>
                      {new Date(referral.signupDate).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {!brokerStats?.referredUsers?.length && (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      align="center"
                      sx={{ color: "#666", py: 3 }}
                    >
                      No signups yet
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ bgcolor: "#00E6B8", color: "#fff" }}
        >
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BrokerDashboard;
