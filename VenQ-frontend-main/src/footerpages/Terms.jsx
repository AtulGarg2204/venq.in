import React, { useEffect } from "react";
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
  margin-top:5%;
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

const Terms = () => {
  return (
    <>
    <Navbar st={{ backgroundColor: "green" }} />


    <Grid container justifyContent="center" alignItems="center" padding="0 20px">
      <Grid item xs={12} md={8}>
        <Heading>Terms and Conditions</Heading>
        <SubHeading>Introduction</SubHeading>
        <Content>
        <br></br>
          The terms of use for our website, Venq.in ("our site"), outline the
          agreement between you and us regarding your access to our site. These
          terms of use apply to all users and visitors of our site.<br></br> <br></br>By using our
          site, you are acknowledging and agreeing to be bound by these terms of
          use, as well as our Cookie Notice and Privacy Policy. If you do not
          agree to these documents, please refrain from using our site
          immediately.<br></br> <br></br> VENQ Technologies Pvt LTD ("we or us") operates our site,
          with registered number and registered office at . We reserve the right to modify or
          amend these terms of use, our site, or any content on our site, as
          needed.<br></br> <br></br> This may be done for security, legal or regulatory reasons, or
          to reflect updates or changes to our site's services or functionality.
          It is advised that you periodically check our site and these terms of
          use to ensure that you are aware of and in compliance with the current
          version.<br></br> <br></br>Any changes made are binding on users of our site and will
          take effect immediately upon posting the revised documentation on our
          site. By continuing to use our site, you agree to be bound by any
          variations made.<br></br> <br></br> If you choose to become a seller or investor with us,
          you must also comply with our Seller Terms or Investor Terms, as
          applicable.<br></br> <br></br> These terms of use should be read alongside and will apply
          in addition to our Seller Terms or Investor Terms, which are made
          available during our registration process.
        </Content>
        <SubHeading>Permitted Usage</SubHeading>
        <Content>
          You may only use our website for legal purposes. You may not:
          <BulletList>
            <BulletListItem>
              Use our site in any way that violates local, national or
              international laws or regulations;
            </BulletListItem>
            <BulletListItem>
              Use our site unlawfully, fraudulently, or for any illegal purpose;
            </BulletListItem>
            <BulletListItem>
              Use our site to harm minors in any way;
            </BulletListItem>
            <BulletListItem>
              Post, receive, upload, download, or reuse any content on our site
              that does not comply with our content standards listed below;
            </BulletListItem>
            <BulletListItem>
              Use our site to send unsolicited or unauthorized advertising or
              promotions (spam);
            </BulletListItem>
            <BulletListItem>
              Knowingly transmit any data, material, viruses, malware or other
              harmful programs through our site;
            </BulletListItem>
            <BulletListItem>
              Overload or disrupt our servers or networks in any way;
            </BulletListItem>
            <BulletListItem>
              Interfere with any other party's use of the site;
            </BulletListItem>
            <BulletListItem>
              Use any automated tools to scrape, aggregate or copy content from
              our site without permission;
            </BulletListItem>
            <BulletListItem>
              Combine our site's data with third party data without permission;
            </BulletListItem>
            <BulletListItem>
              Interfere with the proper functioning of our site;
            </BulletListItem>
            <BulletListItem>
              Post misleading, false, offensive, obscene, indecent or unlawful
              content on our site;
            </BulletListItem>
            <BulletListItem>
              Impose unreasonable load on our infrastructure;
            </BulletListItem>
            <BulletListItem>
              Attempt to gain unauthorized access to our site or connected
              servers/databases;
            </BulletListItem>
            <BulletListItem>
              Attack our site through denial of service;
            </BulletListItem>
            <BulletListItem>
              Reverse engineer, decompile or access the code or processes behind
              our site;
            </BulletListItem>
            <BulletListItem>
              Copy, reproduce, modify or publicly display our content without
              permission.
            </BulletListItem>
          </BulletList>
        </Content>
        <SubHeading>Content Standards</SubHeading>
        <Content>
          These standards apply to all material you contribute to our website
          (contributions) and related services. You must follow the spirit and
          letter of these standards. They apply to each part and the whole of
          any contribution.
        </Content>
        <SubHeading>Contributions must:</SubHeading>
        <Content>
          <BulletList>
            <BulletListItem>Be accurate (if stating facts)</BulletListItem>
            <BulletListItem>
              Express genuinely held opinions (if stating opinions)
            </BulletListItem>
            <BulletListItem>Follow applicable laws where posted</BulletListItem>
          </BulletList>
        </Content>
        <SubHeading>Contributions must not:</SubHeading>
        <Content>
          <BulletList>
            <BulletListItem>Include defamatory material</BulletListItem>
            <BulletListItem>
              Include obscene, offensive, hateful or inflammatory material
            </BulletListItem>
            <BulletListItem>Promote sexually explicit material</BulletListItem>
            <BulletListItem>Promote violence</BulletListItem>
            <BulletListItem>
              Promote discrimination based on race, gender, religion,
              nationality, disability, sexual orientation or age
            </BulletListItem>
            <BulletListItem>
              Infringe any copyright, database rights or trademarks
            </BulletListItem>
            <BulletListItem>Mislead anyone</BulletListItem>
            <BulletListItem>
              Breach any legal duty owed to a third party like a contract or
              confidentiality
            </BulletListItem>
            <BulletListItem>Promote illegal activity</BulletListItem>
            <BulletListItem>
              Be threatening, abusive, invade privacy, or cause annoyance,
              inconvenience or anxiety
            </BulletListItem>
            <BulletListItem>
              Harass, upset, embarrass, alarm or annoy others
            </BulletListItem>
            <BulletListItem>
              Impersonate any person or misrepresent your identity or
              affiliation with any person
            </BulletListItem>
            <BulletListItem>
              Suggest they come from us if not the case
            </BulletListItem>
            <BulletListItem>
              Advocate, promote or assist any unlawful act
            </BulletListItem>
          </BulletList>
        </Content>
        <SubHeading>Disclaimer and Risk Warning</SubHeading>
        <Content>
          Our site is a marketplace allowing you to invest in properties from
          third parties. As a marketplace, we don't own or sell the properties
          or opportunities shown.<br></br><br></br> You acknowledge no content on our site is a
          recommendation that any investment, portfolio, transaction or strategy
          is suitable for you or anyone else. You understand neither we nor any
          providers, affiliates or third parties will advise you personally on
          the nature, potential, suitability or value of any investment,
          portfolio, transaction, strategy or other matter.<br></br><br></br> The content on our
          site is for informational purposes only. In particular, it does not
          constitute any form of advice or recommendation by us and should not
          be considered an offer, solicitation or invitation to buy or sell
          investments or financial services, other than what our permits for a
          Property Investment Crowd funding Platform.<br></br><br></br> It is not intended to be
          relied upon in making (or not making) any specific investment or other
          decisions. We recommend you seek independent advice from a financial
          advisor before making any such decision.<br></br><br></br> Investment values and income
          can fluctuate, and you may not recover what you invested. Past
          performance does not necessarily indicate future performance. It may
          be difficult to sell or value certain investments or obtain reliable
          information about risks.<br></br><br></br> You acknowledge and agree prices,
          descriptions and other financial data on our site are compiled from
          third party sources we believe reliable, and where possible we verify
          such data commercially as far as possible. <br></br><br></br>However, you acknowledge
          and agree the calculations, profiles and data on our site use such
          third-party data, and neither the data nor calculations are guaranteed
          by these sources, us, or providers or any other person or entity. They
          may be incomplete or inaccurate.<br></br><br></br> You acknowledge and agree returns we
          advertise are indicative only, subject to economic and other factors
          outside our control, and we do not guarantee advertised returns will
          be available at any time. <br></br><br></br>Nothing on our site is an offer or
          solicitation to sell or distribute investments and related services to
          anyone in any jurisdiction. References on our site to prior
          investments or data we published may be selective or partial.<br></br><br></br> As
          markets change continuously, previously published information and data
          may not be current and should not be relied upon.
        </Content>
        <SubHeading>Disclaimers of Warranties</SubHeading>
        <Content>
          Our site is provided “as is,” without warranties of any kind. We and
          our affiliates, agents and licensors cannot and do not warrant the
          accuracy, reliability, quality, completeness or timeliness of
          information on the site, or that the services on the site will be
          timely, non-infringing, of merchantable quality, fit for a particular
          purpose, and we disclaim any such express or implied warranties,
          except those that cannot be excluded by law. Although we try to ensure
          consistent availability of the site, the nature of the internet means
          we cannot guarantee it.<br></br><br></br> We do not warrant the site will be available,
          uninterrupted, timely, secure or error-free, that defects will be
          corrected, or that it will be free of viruses or other harmful
          components.<br></br><br></br> We will not be liable for any loss, damage, expense, costs
          or liability whatsoever, including without limitation financial
          losses, arising from using the site, or it being unavailable. This
          does not affect our liability for death/injury from our negligence, or
          for fraud or fraudulent misrepresentation, or any other liability that
          cannot be excluded or limited by law.<br></br><br></br> You are solely responsible for
          obtaining internet access and for any fees relating to access.
          Similarly, you are solely responsible for all equipment to access our
          site and for antivirus software on your computer. Information
          transmitted via our site passes over public networks.<br></br><br></br> We accept no
          liability if communications sent via our site are intercepted,
          delayed, delivered incorrectly or not delivered.
        </Content>
        <SubHeading>Means of Access</SubHeading>
        <Content>
          Our site is intended for conventional web browsers with 1024 x 768
          pixel resolution or greater. Although you may access the site through
          other means, be aware it may not display accurately.<br></br><br></br> You must not
          access our site through high-speed, automated, repeated access devices
          or services. Parts of our site require passwords or logins.<br></br><br></br> You must
          not obtain or attempt to obtain unauthorized access to such parts or
          protected materials/information through any means not intentionally
          made available by us for your use.
        </Content>
        <SubHeading>Eligibility and Registration</SubHeading>
        <Content>
          To access our site, you must be at least 18 years old and have full
          legal capacity. You represent you have the legal right, experience,
          knowledge and ability to access and use our site according to these
          terms.<br></br><br></br> To access our services and restricted parts of our site you
          must register as an investor or seller. Note an application to
          register as both may be rejected. To become an investor/seller you
          must follow a registration process.<br></br><br></br> First, you must submit basic
          details about yourself (including name and email) and choose a unique
          username and password. You may need to provide security question
          answers. These identify you so keep them secure always. You will then
          need to submit detailed information about yourself or the property to
          sell, as applicable.<br></br><br></br> We will also require proof of ID and address (or
          directors/partners/representatives for businesses) to comply with
          anti-money laundering obligations. Seller and investor applications
          are subject to approval we may accept or reject at our sole
          discretion.<br></br><br></br> You represent the information you provide about yourself
          during registration is accurate, current and complete. See our Privacy
          Policy for details on processing your personal data.
        </Content>
        <SubHeading>Your Login Details</SubHeading>
        <Content>
          Each time you log in you will need to enter your email and password
          and may need to answer security questions. Your username and password
          are unique and non-transferable.<br></br><br></br> You are responsible for all activity
          by anyone using your username and password. So you must protect their
          confidentiality and notify us immediately of any disclosure, loss,
          theft or unauthorized use.<br></br><br></br> However, you: - May not transfer/resell
          your username/password to any third party; and - Must notify us at
          team@venq.in of any possible unauthorized use of your
          username/password or breach of security, including loss, theft or
          disclosure. If you authorize an employee, contractor or agent to use
          your login details, you will be responsible for their activity on our
          site.<br></br><br></br> We reserve the right not to act on your instructions if we
          suspect the logged in person is not you, or we suspect
          illegal/fraudulent activity or unauthorized use.
        </Content>
        <SubHeading>Links to and from Other Sites</SubHeading>
        <Content>
          Hyperlinks on our site let you access websites operated by others.
          Such hyperlinks are provided for reference and convenience only and
          the website owners/operators are exclusively responsible for them.<br></br><br></br> You
          acknowledge and agree we do not endorse and are not responsible for
          the content or operation of such websites, and make no representations
          or warranties about them, including that their content does not
          infringe rights or applicable laws.<br></br><br></br> We exclude any liability that may
          arise from external website material causing any loss, damage, injury
          or financial loss of any kind. Our site must not be framed on any
          other site, nor may you create a link to any part of our site without
          permission.<br></br><br></br> We reserve the right to withdraw linking permission
          without notice. We assume no responsibility for third party software
          or materials on our site and have no liability for their use or
          inability to use them.
        </Content>
        <SubHeading>Limitation of Liability and Indemnity</SubHeading>
        <Content>
          You use our site entirely at your own risk. Neither we nor our
          affiliates, agents, employees, suppliers or licensors will be liable
          to you or anyone else for any inaccuracy, delay, interruption, error,
          omission, loss, damage, expense, costs, delays or liability whatsoever
          including without limitation financial losses arising from using our
          site or it being unavailable.<br></br><br></br> This applies regardless of cause and
          even if advised of the possibility of such damages. We have no
          liability for any decision made or action taken by you relying on our
          site or its content. Our total liability to you under these terms
          shall not exceed AED 10,000. All exclusions and limitations apply to
          the fullest extent permitted by applicable law.<br></br><br></br> You shall fully
          indemnify us against any liability we incur for any loss, damage,
          costs or expenses arising from your breach of these terms.<br></br><br></br> Where you
          use our site inappropriately or maliciously, you agree to indemnify us
          against any losses suffered by us or third parties as a result.
        </Content>
        <SubHeading>Availability of the Site</SubHeading>
        <Content>
          As electronic services can be interrupted or fail, access to our site
          is offered on an “as is” and “as available” basis only.<br></br><br></br> We reserve the
          right to limit availability of our site to any person, geographic area
          or jurisdiction, and/or terminate your access and use at any time at
          our sole discretion. <br></br><br></br>We may, at our discretion, impose limits or
          restrictions on your use of our site, or withdraw access to it or
          suspend such access at any time without notice for commercial,
          security, technical, maintenance, legal, regulatory reasons, or due to
          any breach of these terms.
        </Content>
        <SubHeading>Intellectual Property Rights </SubHeading>
        <Content>
          All remarks, suggestions, ideas, materials or other information
          (excluding data) you provide through our site remain our property
          forever. You are responsible for any submissions via your
          username/password, including their accuracy, legality, reliability,
          appropriateness, originality and copyright.<br></br><br></br> However, we have the right
          to refuse, remove, edit or abridge any submission, and disclose
          submissions as necessary, including to comply with any applicable law,
          regulation, process or request, at our sole discretion.<br></br><br></br> We own all
          present and future copyright, trademarks, design rights, database
          rights and other intellectual property rights in our site and its
          content. If any such intellectual property rights vest in you by law
          or otherwise, you agree to assign them back to us as reasonably
          requested. <br></br><br></br>You retain copyright in any data uploaded/submitted to our
          site. Without prejudice to our rights/obligations regarding your
          personal data per our Privacy Policy, you grant us a perpetual,
          royalty-free, non-terminable worldwide license to use, copy,
          distribute, publish and transmit such data.<br></br><br></br> We don't warrant the site
          content does not infringe third party rights. We may disclose your
          identity to a third party claiming material you posted infringes their
          intellectual property rights or privacy. We may remove any material or
          posting from the site at any time.
        </Content>
        <SubHeading>Copyrights and Trademarks</SubHeading>
        <Content>
          Our site and content are our property or our licensors' property,
          protected by copyright, trademark, patent and other applicable laws.<br></br><br></br>
          Except where necessary to view our site through your browser, or as
          permitted by these terms, no part of our site may be reproduced,
          stored, modified, adapted, uploaded, framed, performed in public or
          transmitted in any form by any process without our specific written
          consent.
        </Content>
        <SubHeading>Confidentiality</SubHeading>
        <Content>
          After we provide your unique username, you must not disclose to anyone
          (except representatives/advisors or as legally required) any
          Confidential Information, and must prevent unauthorized disclosure of
          Confidential Information.<br></br><br></br> You must only use such information for
          transactions on our site. Confidential Information includes all
          information relating to us, any investor/seller (including profiles)
          or previously registered investor/seller provided through or in
          connection with our site.
        </Content>
        <SubHeading>Suspension and Termination</SubHeading>
        <Content>
          We will determine in our sole discretion whether these terms have been
          breached via your site use. Where a breach has occurred, we may take
          appropriate action. We may terminate your login details and site
          access for any or no reason, anytime, without notice or liability,
          however arising. <br></br><br></br>We exclude liability for actions in response to term
          breaches. Our responses are not limited, and we may take any other
          reasonably appropriate action. <br></br><br></br>All restrictions, disclaimers,
          exclusions and limitations of liability continue to apply during
          suspension and survive termination. Upon suspension/termination you
          must not access or use our site.
        </Content>
        <SubHeading>General Terms</SubHeading>
        <Content>
          If we don't insist on strict performance of these terms or exercise
          our rights/remedies, this will not waive such rights/remedies or
          relieve you of your obligations. No waiver of any right/remedy
          restricts us from exercising it in the future.<br></br><br></br> If any term is invalid,
          unlawful or unenforceable, it will be severed and the remaining terms
          will be valid as far as permitted by MCA law. Nothing in these terms
          establishes any partnership/joint venture or authorizes any party to
          make commitments for/bind any other party.<br></br><br></br> You should seek your own
          tax advice. No warranty or representation is made regarding your tax
          position following any investment. Notices must be in writing and
          delivered by hand, pre-paid first class post or equivalent service to
          the registered/principal address, or by email to the notified email
          address.<br></br><br></br> Our email address for notices is team@venq.in. Notices will
          be deemed received on signature of delivery receipt if delivered by
          hand, on the second working day after posting if sent by post, or on
          the next working day after sending if emailed.<br></br><br></br> All correspondence will
          be in English. Any dispute regarding our site, these terms or their
          subject matter/formation will be governed by MCA law and subject to
          the non-exclusive jurisdiction of the MCA Courts.<br></br><br></br> These terms and
          referenced documents constitute the entire agreement between us,
          superseding all previous discussions, correspondence, negotiations or
          agreements relating to this subject matter.
        </Content>
        <SubHeading>Changes to Terms</SubHeading>
        <Content>
          We may revise these terms by updating this page. You should check this
          page periodically for changes, as they are legally binding.<br></br><br></br> Some
          provisions may also be superseded by notices published elsewhere on
          our site.
        </Content>
        <SubHeading>Contacting Us</SubHeading>

        <Content style={{ marginBottom:  "10%" }}>
          Contact us at team@venq.in if you have any questions about these terms
          or wish to contact us for any reason.
        </Content >
        {/* You can add more sections with their respective stylings */}
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
};

export default Terms;
