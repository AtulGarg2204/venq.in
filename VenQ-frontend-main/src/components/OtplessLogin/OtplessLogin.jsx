import React, { useEffect } from "react";
import {
  loadOTPlessScriptSignIn,
  unloadOTPlessScript,
} from "../../utils/otpless";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import axios from "axios";

export default function OtplessLogin() {
  const navigate = useNavigate();
  const URL = config.URL;
  useEffect(() => {
    loadOTPlessScriptSignIn();
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
            window.alert("User not available, Please Signup");
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
    return () => {
      unloadOTPlessScript();
    };
  }, [navigate]);
  return (
    <div>
      <div id="otpless-login-page"></div>
    </div>
  );
}
