import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45720526.js"></script>
const Heading = styled(Typography)`
  font-family: "Saira";
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: left;
  color: #000000;
  margin-bottom: 20px;
  margin-top: 5%;
`;

const SubHeading = styled(Typography)`
  font-family: "Saira";
  font-style: normal;
  font-weight:600;
  font-size: 23px;
  line-height: 26px;
  text-align: left;
  letter-spacing: 0.05em;
  color: #000000;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 17px;
    display: flex;
    text-align: start;
  }
`;

const BulletList = styled("ul")`
  padding-left: 20px;
`;

const BulletListItem = styled("li")`
  font-family: "Arial", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
`;

const Content = styled(Box)`
  font-family: "Arial", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
  margin-bottom: 20px;
`;

const Refund = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding="0 20px"
      >
        <Grid item xs={12} md={8}>
          <Heading>Refund Policy - VENQ</Heading>
          <Typography variant="subtitle1" color="textSecondary">
            Effective Date: 1st February 2024
          </Typography>

          <Content>
            Thank you for choosing VENQ for your real estate investment needs.
            Our commitment is to provide you with a seamless and transparent
            investment experience. <br></br> <br></br>Please review our refund policy to understand
            the terms and conditions associated with fund transfers.
          </Content>

          <BulletList>
            <BulletListItem>
              <SubHeading>Cancellation of Fundraising:</SubHeading>
              In the event of the cancellation of the fundraising campaign before reaching the
              targeted amount, all contributed funds will be promptly refunded
              to the respective investors. Users who receive a refund due to the
              campaign cancellation are exempt from paying fees when
              reinvesting the refunded amount.
            </BulletListItem>
            <br></br>

            <BulletListItem>
              <SubHeading>Successful Fundraising:</SubHeading>
              Upon successful fundraising, VENQ will issue Compulsory Convertible Debentures
              (CCDs) linked to the specific property. Additionally, contracts,
              including agreements related to the maintenance of the property with the
              Special Purpose Vehicle (SPV), will be signed. Refunds
              are not applicable once the fundraising campaign reaches its
              target, and the property transaction proceeds.
            </BulletListItem>
            <br></br>


            <BulletListItem>
              <SubHeading>Failed Property Transaction:</SubHeading>
              If, due to unforeseen circumstances, the property transaction fails to materialize after successful fundraising, all contributed funds will be returned to the investors. Users who receive a refund due to a failed transaction are exempt from paying fees when reinvesting the refunded amount.
            </BulletListItem>
            <br></br>


            <BulletListItem>
              <SubHeading>Timely Refund Processing:</SubHeading>
              VENQ is committed to processing refunds in a timely manner. Please allow 5 business days for the refund to reflect in your account.
            </BulletListItem>
            <br></br>


            <BulletListItem>
              <SubHeading>Refund Method:</SubHeading>
              Refunds will be processed through the same payment method used for the initial investment.
            </BulletListItem>
            <br></br>


            <BulletListItem>
              <SubHeading>Communication of Refund Status:</SubHeading>
              Investors will be notified promptly regarding the status of their refund through the email provided during the registration process.
            </BulletListItem>
            <br></br>


            <BulletListItem>
              <SubHeading>Fee Deductions:</SubHeading>
              VENQ charges fees for successful transactions; however, users who receive a refund and reinvest the same amount on VENQ are exempt from paying fees for the reinvested amount.
            </BulletListItem>
            <br></br>


            <BulletListItem>
              <SubHeading>Campaign Not Reaching 100% Subscription:</SubHeading>
              Despite our meticulous due diligence process, there might be instances where a fundraising campaign does not reach 100% subscription. This can occur due to market fluctuations, investor preferences, or other unforeseen factors. In such cases, the campaign may proceed with the received subscriptions, and the property acquisition will be adjusted accordingly.
            </BulletListItem>
            <br></br>

          </BulletList>

          <SubHeading>Contact Information:</SubHeading>
          <Content>
            For any refund-related queries or concerns, please reach out to our customer support at team@venq.in.
          </Content>

          <Content>
            <SubHeading>Note:</SubHeading>
            This refund policy is subject to change, and any modifications will be updated on our platform. Please review the policy periodically to stay informed about any adjustments.
          </Content>

          <Content>
            By using VENQ's platform, you acknowledge and agree to abide by the terms outlined in this refund policy. If you have any questions or require further clarification, please do not hesitate to contact us.
          </Content>

          <Content style={{ marginBottom:  "10%" }}>
            Thank you for choosing VENQ for your real estate investment journey!
          </Content>

        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Refund;
