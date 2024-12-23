// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import config from "../../config";
// import "./Name.css";

// function Name() {
//   const params = new URLSearchParams(window.location.search);
//   const ref = params.get("ref");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const otplessUser = location.state;
//   const URL = config.URL;

//   const data = {
//     name: "Aryan Pundir",
//     email: "pundiraryan0311@gmail.com",
//     phone: "9999999999",
//     isAdmin: false,
//     isVerified: 0,
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     const formData = new FormData(e.target);
//     data.name = formData.get("name");

//     otplessUser.identities = otplessUser.identities.map((identity) => {
//       if (identity.identityType === "EMAIL") {
//         data.email = identity.identityValue;
//         identity.name = formData.get("name");
//       }
//       if (identity.identityType === "MOBILE") {
//         data.phone = identity.identityValue;
//       }
//       return identity;
//     });
    
//     // Pass the broker code as the ref query parameter
//     axios
//       .post(`${URL}/otpless/signup?ref=${encodeURIComponent(ref)}`, data)
//       .then((result) => {
//         console.log("post made");
//         if (result.data.moreinfoneeded) {
//           const sd = {
//             reqd: result.data.reqd,
//             tbs: result.data.tbs,
//           };
//           console.log(sd, "This is sd data");
//           navigate("/signup", { state: sd });
//         } else {
//           console.log(result.data.userinfo);
//           localStorage.setItem(
//             "userinfo",
//             JSON.stringify(result.data.userinfo)
//           );
//           navigate("/dashboard/properties");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="signup-name-container">
//       <form onSubmit={submitHandler}>
//         <label htmlFor="name">Hey, What's your name?</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Type your name here..."
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Name;
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import config from "../../config";
import "./Name.css";

function Name() {
  const navigate = useNavigate();
  const location = useLocation();
  const otplessUser = location.state;
  const URL = config.URL;

  const data = {
    name: "Aryan Pundir",
    email: "pundiraryan0311@gmail.com",
    phone: "9999999999",
    isAdmin: false,
    isVerified: 0,
    brokerDetails: null, // Add this to match schema
    referredBy: null
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    data.name = formData.get("name");

    otplessUser.identities = otplessUser.identities.map((identity) => {
      if (identity.identityType === "EMAIL") {
        data.email = identity.identityValue;
        identity.name = formData.get("name");
      }
      if (identity.identityType === "MOBILE") {
        data.phone = identity.identityValue;
      }
      return identity;
    });

    try {
      // Try to get broker code, but don't stop signup if none exists
      let brokerCode = null;
      try {
        const brokerResponse = await axios.get(`${URL}/api/brokercode`);
        brokerCode = brokerResponse.data.brokerCode;
        console.log("Broker Code:", brokerCode);
      } catch (error) {
        console.log("No broker code available, continuing with signup");
      }

      // Sign up with or without broker code
      const signupUrl = brokerCode 
        ? `${URL}/otpless/signup?ref=${encodeURIComponent(brokerCode)}`
        : `${URL}/otpless/signup`;

      const signupResponse = await axios.post(signupUrl, data);

      console.log("post made");
      if (signupResponse.data.moreinfoneeded) {
        const sd = {
          reqd: signupResponse.data.reqd,
          tbs: signupResponse.data.tbs,
        };
        console.log(sd, "This is sd data");
        navigate("/signup", { state: sd });
      } else {
        console.log(signupResponse.data.userinfo);
        localStorage.setItem(
          "userinfo",
          JSON.stringify(signupResponse.data.userinfo)
        );
        navigate("/dashboard/properties");
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Error data:', error.response.data);
      }
    }
  };

  return (
    <div className="signup-name-container">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Hey, What's your name?</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Type your name here..."
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Name;