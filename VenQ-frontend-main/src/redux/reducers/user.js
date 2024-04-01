import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
}

export const authReducer = createReducer(initialState, {
  SIGNUP_REQUEST: (state) => {
    state.loading = true;
  },
  SIGNUP_SUCCESS: (state, action) => {
    state.loading = false;
    state.userDetails = action.payload.message;
    state.userToken = action.payload.token;
    state.message = null;
    state.signupError = null;
  },
  SIGNUP_FAILURE: (state, action) => {
    state.loading = false;
    state.userDetails = null;
    state.message = null;
    state.userToken = null; // Reset the token in case of failure
    state.signupError = action.payload;
  },


  VERIFY_REQUEST: (state) => {
    state.loading = true
  },
  VERIFY_SUCCESS: (state, action) => {
    state.loading = false
    state.message = action.payload.message
    state.userDetails = action.payload.details
    state.verifyError = null
  },
  VERIFY_FAILURE: (state, action) => {
    state.loading = false
    state.message = null
    state.userDetails = null
    state.verifyError = action.payload
  },


  LOGIN_REQUEST: (state) => {
    state.loading = true
  },
  LOGIN_SUCCESS: (state, action) => {
    state.loading = false
    state.loginMessage = action.payload.message
    state.userToken = action.payload.token
    state.loginError = null
  },
  LOGIN_FAILURE: (state, action) => {
    state.loading = false
    state.loginMessage = null
    state.userToken = null
    state.loginError = action.payload
  },


  LOGOUT_REQUEST: (state) => {
    state.loading = true
  },
  LOGOUT_SUCCESS: (state, action) => {
    state.loading = false
    state.logoutMessage = action.payload.message
    state.user = action.payload.user
    state.userToken = null
    state.userDetails = null
    state.loginMessage = null
    state.logoutError = null
  },
  LOGOUT_FAILURE: (state, action) => {
    state.loading = false
    state.logoutMessage = null
    state.user = null
    state.userToken = null
    state.loginMessage = null
    state.userDetails = null
    state.logoutError = action.payload
  },


  OTP_RESEND_REQUEST: (state) => {
    state.loading = true
  },
  OTP_RESEND_SUCCESS: (state, action) => {
    state.loading = false
    state.otpMessage = action.payload
    state.otpResendError = null
  },
  OTP_RESEND_FAILURE: (state, action) => {
    state.loading = false
    state.otpMessage = null
    state.otpResendError = action.payload
  },

});
