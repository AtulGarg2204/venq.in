import React, { useEffect } from 'react'
import { loadOTPlessScriptSignUp, unloadOTPlessScript } from "./../../utils/otpless"
import { useNavigate } from "react-router-dom";

export default function OptlessSignup() {
    const navigate = useNavigate();
    useEffect(() => {
        loadOTPlessScriptSignUp();
        window.otpless = (otplessUser) => {
            navigate("name", { state: otplessUser })
        };
        return () => {
            unloadOTPlessScript();
        }
    })
    return (
        <div id="otpless-login-page"></div>
    )
}
