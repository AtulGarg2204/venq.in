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

const Privacy = () => {
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
          <Heading>Privacy Policy</Heading>
          <SubHeading>Introduction</SubHeading>
          <Content>
          VENQ Technologies Pvt. LTD. (Company Number: U72900UR2022PTC013946 with registered address at Bisht Bhawan Compound, Kirlani Cottage, Tallital, Nainital, Uttarakhand, India, 263001) (“we” or “ ur”) is dedicated to upholding the highest standards of privacy and security when collecting and using customers'personal data.<br></br>
            <br></br> This policy outlines how we may gather, utilize, and
            disclose your personal information. Personal data includes all the
            details we retain or obtain directly or indirectly (including
            through cookies or similar tools) about you, your transactions,
            financial information, interactions or dealings with us, including
            data received from third parties and information gathered through
            use of our websites and mobile applications.<br></br>
            <br></br> If you have any queries about this privacy policy or the
            security of your personal data, please contact us at team@venq.in.
            For more details on our use of cookies, please refer to our Cookie
            Policy.<br></br>
            <br></br> Please take the time to read this Privacy Policy
            carefully. By opening an account with us you consent to our use of
            your personal information as per the Terms and Conditions and
            Privacy Policy.<br></br>
            <br></br> By implementing and following this Privacy Policy, we will
            make your online experience more secure and enjoyable.<br></br>
            <br></br> Use of Venq.in (“our website”) is subject to our Terms of
            Use and any products and services provided are subject to our Terms
            and Conditions.<br></br>
            <br></br> By visiting our website you are accepting and agreeing to
            the practices outlined in this Privacy Policy.
          </Content>

          <SubHeading>Why Have a Privacy Policy?</SubHeading>
          <Content>
            There are several laws that establish key standards for information
            that identifies a living person. This is known as “personal data.”
            All organizations processing personal data must do so fairly and
            lawfully.<br></br>
            <br></br> We take our obligations seriously and take all necessary
            steps to comply when we store and process your personal data. It is
            essential for us to only gather, store and process the minimum
            required personal data so we can provide and perform our services.
            Typical information we may request includes your name, address,
            contact details and Anti Money Laundering / Know Your Customer
            (AML/KYC) related data.<br></br>
            <br></br> Additionally, our servers automatically receive and record
            information on all website visitors. Please see our Cookie Policy
            for more details on the cookies on our website. We will record your
            personal data (aside from the automatic information above) once you
            have fully registered with us.
          </Content>

          <SubHeading>How We Collect Your Personal Data</SubHeading>
          <Content>
            We gather your personal data in several ways, including:
            <BulletList>
              <BulletListItem>
                If you provide it when communicating with us (e.g. when
                registering for our services)
              </BulletListItem>
              <BulletListItem>
                If you invest in any of our products or services
              </BulletListItem>
              <BulletListItem>
                If you invest in any of our products or services
              </BulletListItem>
              <BulletListItem>
                If you enter a competition or promotion
              </BulletListItem>
              <BulletListItem>
                If you make payments or change your account details
              </BulletListItem>
              <BulletListItem>
                When you visit our website (e.g. through cookies, technical
                information like IP address, login info, browser type and
                version, time zone, browser plug-ins, operating system, page
                response times, download errors, page interaction info, phone
                number used to call customer service)
              </BulletListItem>
            </BulletList>
          </Content>

          <SubHeading>How We Use Your Personal Data</SubHeading>
          <Content>
            We retain and use your personal data for the following main
            purposes:
            <BulletList>
              <BulletListItem>
                Assessing customer suitability for products and services
              </BulletListItem>
              <BulletListItem>
                Anti-money laundering (AML), Know Your Customer (KYC) checks,
                and setting investor risk profile
              </BulletListItem>
              <BulletListItem>
                Conducting market research and surveys to improve our products
                and services
              </BulletListItem>
              <BulletListItem>
                Preventing, detecting, investigating and prosecuting crime
                (including money laundering, terrorism, fraud) in any
                jurisdiction, identity verification, government sanctions
                screening and due diligence checks
              </BulletListItem>
              <BulletListItem>
                Complying with local or foreign laws, regulations, voluntary
                codes, directives, judgments, court orders, policies, reporting
                requirements under financial laws and demands or requests of any
                authority, regulator, enforcement agency or exchange body
              </BulletListItem>
              <BulletListItem>
                Seeking professional advice, including regarding any legal
                proceedings (including prospective proceedings), obtaining legal
                advice, or establishing, exercising or defending legal rights
              </BulletListItem>
              <BulletListItem>
                If required by law, or necessary for proper operation of our
                systems, protection of users and customers, or enforcement of
                Terms and Conditions
              </BulletListItem>
              <BulletListItem>
                Processing applications, running accounts, providing services,
                contacting you
              </BulletListItem>
              <BulletListItem>
                Servicing our relationship with you e.g. administration,
                accounting, billing, auditing and other legal purposes
              </BulletListItem>
              <BulletListItem>
                Security, payment verification, preventing and detecting crime,
                recovering debt
              </BulletListItem>
              <BulletListItem>
                Generating anonymous statistics on users and website traffic{" "}
              </BulletListItem>
              <BulletListItem>
                Providing you or selected third parties with information about
                goods or services that may interest you
              </BulletListItem>

              <BulletListItem>
                Notifying you about changes to our service{" "}
              </BulletListItem>

              <BulletListItem>
                Ensuring content from our website is optimally presented{" "}
              </BulletListItem>

              <BulletListItem>
                Administering our site and internal operations like
                troubleshooting, data analysis, testing, research, surveys
              </BulletListItem>

              <BulletListItem>
                Allowing you to use interactive features when you choose to
              </BulletListItem>

              <BulletListItem>
                Helping keep our website safe and secure
              </BulletListItem>

              <BulletListItem>
                Measuring and understanding ad effectiveness, delivering
                relevant ads to you and others
              </BulletListItem>

              <BulletListItem>
                Making suggestions and recommendations about goods or services
                that may interest you or other users
              </BulletListItem>

              <BulletListItem>
                Except where opted out, using your personal data to keep you
                informed about relevant products and services
              </BulletListItem>
            </BulletList>
          </Content>
          <SubHeading>How We Safeguard Your Personal Data</SubHeading>
          <Content>
            The security of your personal data is important to us and we have
            invested significant resources to protect its confidentiality. When
            using external service providers, we require they adhere to the same
            standards as us.<br></br>
            <br></br> Personal data may be transferred or stored outside of your
            country of residence. Regardless of location, we take all reasonably
            necessary steps to ensure personal data is kept secure. The Internet
            is not a secure communication medium and sending/receiving data over
            the Internet carries risks like third party access and interference.
            <br></br>
            <br></br>Information passing over the Internet may be transmitted
            internationally (even between sender and recipient in the same
            country) via countries with weaker privacy/data protection laws than
            your country of residence. We do not accept responsibility or
            liability for confidentiality, security or integrity of your
            personal data in connection with Internet transmission.<br></br>
            <br></br> However, we take all reasonable care in collecting,
            storing, processing and disclosing your personal data and have
            implemented internal security procedures to minimize the risk of
            unauthorized access.<br></br>
            <br></br> Because of these procedures we may ask for proof of
            identity before disclosing any of your personal information. To help
            protect your personal data and reduce interception risk by
            unauthorized third parties, our secure servers use industry standard
            SSL and TLS technology when you submit information through our
            website.<br></br>
            <br></br> This is shown by the “https” protocol and padlock icon in
            the URL bar.
          </Content>
          <SubHeading>
            You can also help protect your personal data by:
          </SubHeading>
          <Content>
            <BulletList>
              <BulletListItem>
                Choosing a password that is hard to guess but you can remember.
                Ideally with special characters and numbers. We recommend
                changing it regularly and keeping it safe if written down.
              </BulletListItem>
              <BulletListItem>
                Ensuring no one can see your login details{" "}
              </BulletListItem>
              <BulletListItem>
                Closing your browser after logging off and clearing your
                browsing history if possible
              </BulletListItem>
              <BulletListItem>
                Never disclosing your account details to anyone
              </BulletListItem>
              <BulletListItem>
                Keeping your software protection up to date with the latest
                security upgrades
              </BulletListItem>
            </BulletList>
            To get the most from our services, please keep your personal data
            (including email address) accurate and current. You can do this by
            logging into our secure website. We will store your personal data
            (aside from the automatic information above) once received your
            registration.
          </Content>
          <SubHeading>How Long We Retain Your Personal Data </SubHeading>
          <Content>
            Information about your financial transactions with us will be kept
            for the period required by applicable tax and revenue laws.<br></br>
            <br></br> Your personal profile and membership data will be retained
            while you remain an active free or paid member, and for up to 7
            years after membership activity ends.<br></br>
            <br></br> In all other cases, we will erase or anonymize your data
            once no longer needed for the purpose obtained.
          </Content>

          <SubHeading>Who We Disclose your Personal Data To</SubHeading>
          <Content>
            We allow third party service providers to process personal data
            where needed to provide a service to us. These arrangements may
            involve your personal data being located India where we have our
            head office.<br></br>
            <br></br> Different privacy laws may apply in these countries
            versus the country you are located in. We will always aim to adopt
            the highest privacy protection standards wherever your personal data
            is located. Our Privacy Policy does not apply to third-party or
            linked websites that we do not operate or control.<br></br>
            <br></br>We may share your information with selected third parties
            including:
            <BulletList>
              <BulletListItem>
                Business partners, suppliers and sub-contractors to perform any
                contract with them or you
              </BulletListItem>
              <BulletListItem>
                Advertisers and ad networks requiring the data to select and
                serve relevant ads to you and others
              </BulletListItem>
              <BulletListItem>
                Analytics and search providers assisting us in improving and
                optimizing our website
              </BulletListItem>
              <BulletListItem>
                Credit reference agencies to assess your credit score if
                required to enter a contract with you
              </BulletListItem>
              <BulletListItem>
                Prospective buyers or sellers of any business or assets if we
                sell or buy any business or assets
              </BulletListItem>
              <BulletListItem>
                Third parties if we or substantially all our assets are acquired
              </BulletListItem>
              <BulletListItem>
                If legally obligated to disclose or share your personal data to
                comply with any duty, enforce or apply agreements between us, or
                protect the rights, property or safety of us, customers, or
                others. This includes exchanging information for fraud
                protection and credit risk reduction.
              </BulletListItem>
            </BulletList>
          </Content>

          <SubHeading>
            How to Withdraw Consent Including Marketing Opt-Out
          </SubHeading>
          <Content>
            You may withdraw your data processing consent at any time, without
            affecting the lawfulness of processing based on consent before
            withdrawal.<br></br>
            <br></br> You may also instruct us not to process your personal data
            for marketing purposes.<br></br>
            <br></br> In practice, you will usually expressly agree in advance
            to our use of your personal data for marketing purposes, or we will
            give you the opportunity to opt in. You can unsubscribe from our
            emails.<br></br>
            <br></br> You can also contact us at team@venq.in to withdraw
            consent or opt out of marketing communications anytime.
          </Content>

          <SubHeading>
            Do We Conduct Profiling and Automated Decision Making?
          </SubHeading>
          <Content>
            We use Google Analytics to collect details on how you use our
            website and anonymous data you enter into our forms.<br></br>
            <br></br> We do this to
            help analyze site usage patterns and traffic across multiple
            devices, administer our site and manage your account. See our Cookie
            Policy for more Google Analytics details. <br></br>
            <br></br>We do not conduct any
            other profiling or automated decision-making regarding the
            information automatically collected about you when visiting our
            site.
          </Content>

          <SubHeading>Monitoring </SubHeading>
          <Content>
            To the extent permitted by law, we may record and monitor
            communications with you to ensure compliance with our legal,
            regulatory and internal policies.<br></br>
            <br></br> This may include recording phone
            conversations.
          </Content>

          <SubHeading>Your Rights</SubHeading>
          <Content>
            Under data protection law, you have several rights regarding your
            information including:
            <BulletList>
              <BulletListItem>Access your information</BulletListItem>
              <BulletListItem>
                Withdraw consent to processing your information anytime
              </BulletListItem>
              <BulletListItem>
                Request changes to correct and update your information
              </BulletListItem>
              <BulletListItem>
                Delete or erase your information (right to be forgotten)
              </BulletListItem>
              <BulletListItem>
                Stop or restrict processing of your information
              </BulletListItem>
              <BulletListItem>
                Object to our processing your information
              </BulletListItem>
              <BulletListItem>
                Not be subject to automated decision-making
              </BulletListItem>
              <BulletListItem>
                Request transfer of some of your information (data portability)
              </BulletListItem>
            </BulletList>
            To exercise any of your rights, please contact us at team@venq.in.
            Note that an archive copy of any information given to us may be
            retained for our records and audit purposes.<br></br>
            <br></br> You can request a copy
            of your information we hold by emailing team@venq.in.
          </Content>

          <SubHeading>Third Party Websites</SubHeading>
          <Content>
            The website contains links to other websites. We are not responsible
            for the privacy policies or practices of third party websites
          </Content>

          <SubHeading>Social Media</SubHeading>
          <Content>
            We operate channels, pages and accounts on some social media sites
            to inform, assist and engage with customers. We monitor and record
            comments and posts about us on these channels so we can improve our
            services.<br></br>
            <br></br> We are not responsible for any information posted on those
            sites other than what we have posted.<br></br>
            <br></br> We do not endorse the social
            media sites themselves or any third party information posted on
            them.
          </Content>

          <SubHeading>
            You expressly agree to such personal data transfers.
          </SubHeading>

          <SubHeading>Changes to this Privacy Policy</SubHeading>
          <Content>
            We may update this Privacy Policy at our discretion. We recommend
            reviewing it regularly.
          </Content>

          <SubHeading>Contact</SubHeading>
          <Content style={{ marginBottom:  "10%" }}>
            Please contact team@venq.in with any questions, concerns or
            complaints about our processing of your personal information.<br></br>
            <br></br> If you
            are dissatisfied with how we have handled your complaint or remain
            concerned about our personal data handling, you can lodge a
            complaint with the relevant privacy supervisory authority.
          </Content>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Privacy;
