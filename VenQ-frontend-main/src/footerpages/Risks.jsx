import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box, Grid, Typography, styled } from "@mui/material";
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
  font-weight: bold;
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

const Risks = () => {
  return (
    <>
    <Navbar/>
    <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding="0 20px"
      >
    
      <Grid item xs={12} md={8}>
        <Heading>Key Risks</Heading>
        <SubHeading>No Assurance of Returns</SubHeading>
        <Content>
          Past performance does not guarantee future results. Any previous
          returns, expected profits, or projections may not lead to actual
          future performance. Your money is at risk and returns are not assured.{" "}
        </Content>
        <SubHeading>Investment Duration and Liquidity</SubHeading>
        <Content>
          Venq investments are meant to be held for the full 5 year term and are
          not listed on an exchange. We provide a Secondary Transfer Facility on
          our platform where you can sell before the end of the term.<br></br><br></br> This
          facility is only available for 2 weeks at a time, twice per year. You
          may not be able to exit early, making this an illiquid investment.
          Please do not invest if you do not intend to hold for the full term.<br></br><br></br>
          Even with the Secondary Transfer Facility, there is no guarantee you
          can sell your investment.
        </Content>
        <SubHeading>Warnings and Disclosures</SubHeading>
        <Content>
          Real estate investment carries risk. Investors on Venq do not directly
          own property, rather they own a share in a private entity that owns
          the property.<br></br><br></br>Your investment value can fluctuate and anticipated
          returns may not happen as predicted. You could also experience delays
          in rental income payments or difficulty selling the property at the
          end of the term.<br></br><br></br> In some cases, government restrictions may limit the
          potential buyers for a property. Venq investments differ significantly
          from direct property ownership, real estate funds, REITs or other real
          estate securities. If Venq ceases operations, you could experience
          losses, costs and payment delays.<br></br><br></br> Using credit or borrowed money to
          invest carries greater risk as you would still need to meet repayment
          obligations even if your investment declines.
        </Content>
        <SubHeading>Disclaimers:</SubHeading>
        <Content>
          <BulletList>
            <BulletListItem>
              Property investments carry risk. Your capital could be at risk and
              you may not achieve expected returns.{" "}
            </BulletListItem>
            <BulletListItem>
              Real estate investment has inherent risks, as property values
              fluctuate and rental income is not guaranteed.
            </BulletListItem>
            <BulletListItem>
              Past results and predictions should not be considered accurate
              indicators of future performance.
            </BulletListItem>
            <BulletListItem>
              The real estate market is susceptible to downturns that can impact
              your property's value.
            </BulletListItem>
          </BulletList>
        </Content>
        <SubHeading>No Advisory Services Provided</SubHeading>
        <Content>
          Venq runs a real estate investment platform and manages private
          entities holding property titles on behalf of investors. Venq does not
          provide investment or other advice.<br></br><br></br> Investors should conduct their own
          due diligence before investing and/or consult an independent financial
          advisor.<br></br><br></br> In evaluating opportunities, we use third party data that we
          believe to be reliable but cannot guarantee its accuracy or
          completeness.
        </Content>
        <SubHeading>Additional Disclaimers</SubHeading>
        <Content style={{ marginBottom:  "10%" }}>
          This is not investment advice. These estimates are based on past
          performance and current conditions which are not reliable indicators
          of future results.<br></br><br></br> They may include assumptions, projections, and
          analysis that are subject to change. Other factors could cause actual
          results, performance or achievements to differ materially.<br></br><br></br> This is for
          informational purposes only and does not constitute an offer or advice
          in any jurisdiction.<br></br><br></br> Please contact your independent financial advisor
          before making any investment decisions. VENQ Technologies Pvt LTD,
           prepares the marketing materials and other
          advertising content.<br></br><br></br> The has no responsibility for reviewing,
          verifying or approving the content of posts, marketing materials or
          associated items.
        </Content>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
};

export default Risks;
