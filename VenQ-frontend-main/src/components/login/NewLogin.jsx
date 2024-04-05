import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router-dom";
const NewLogin = () => {
  const navigate = useNavigate();
  const URL = config.URL;
  useEffect(() => {
    window.otpless = (otplessUser) => {
      console.log(otplessUser);
      axios
        .post(`${URL}/otpless/login`, otplessUser)
        .then((result) => {
          console.log("post made");
          if (result.data.moreinfoneeded) {
            const sd = {
              reqd: result.data.reqd,
              tbs: result.data.tbs,
            };
            console.log(sd);
            navigate("/signup", { state: sd });
            // navigate("/dashboard/properties");
          } else {
            console.log(result.data.userinfo);
            localStorage.setItem(
              "userinfo",
              JSON.stringify(result.data.userinfo)
            );
            navigate("/dashboard/properties");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }, [navigate]);
  //  console.log('newlogin')
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          id="otpless-sdk"
          src="https://otpless.com/v2/auth.js"
          data-appid="ET5YILHTV79V192PLC59"
        ></script>
      </Helmet>
      <div id="otpless-login-page" />
    </>
  );
};

export default NewLogin;
