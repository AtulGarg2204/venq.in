import axios from "axios";
import config from "../../config";
// const URL = "https://venq-api.onrender.com"
// const URL = "http://localhost:4000"
const URL = config.URL;

export const signup = (name, email, password,phone) => async (dispatch) => {
  try {
    dispatch({
      type: "SIGNUP_REQUEST"
    });
    const { data } = await axios.post(`${URL}/auth/user/register`, {
      name, email, password,phone
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    dispatch({
      type: "SIGNUP_SUCCESS",
      payload: {
        message: data.message,
        token: data.token // Include the token in the payload
      }
    });
  } catch (error) {
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: error.response.data.message
    });
  }
}


export const verifyEmail = (email, otp) => async (dispatch) => {
  try {
    dispatch({ type: "VERIFY_REQUEST" });

    const { data } = await axios.post(`${URL}/auth/user/verify`, { email, otp }, {
      headers: { "Content-Type": "application/json" },
    });

    if (data) {
      dispatch({
        type: "VERIFY_SUCCESS",
        payload: {
          message: data.message,
          details: data.details,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: "VERIFY_FAILURE",
      payload: error.response.data.message,
    });
  }
}


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST"
    })

    const { data } = await axios.post(`${URL}/auth/user/login`, {
      email, password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        message: data.message,
        token: data.token
      }
    })

  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.response.data.message
    })
  }
}


export const logout = (token) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST"
    })

    const { data } = await axios.post(`${URL}/auth/user/signout`, {
      token
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: {
        message: data.message,
        user: data.user
      }
    })

  } catch (error) {
    dispatch({
      type: 'LOGOUT_FAILURE',
      payload: error.response.data.message
    })
  }
}


export const resendOTP = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "OTP_RESEND_REQUEST"
    })

    const { data } = await axios.post(`${URL}/auth/user/resendOTP`, {
      email
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    dispatch({
      type: "OTP_RESEND_SUCCESS",
      payload: data.message

    })

  } catch (error) {
    dispatch({
      type: 'OTP_RESEND_FAILURE',
      payload: error.response.data.message
    })
  }
}


