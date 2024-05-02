import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom"
import config from '../../config';
import "./Name.css"

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
        isVerified: 0
    }


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target)
        const formData = new FormData(e.target);
        data.name = formData.get("name");

        otplessUser.identities = otplessUser.identities.map((identity) => {
            if (identity.identityType === "EMAIL") {
                data.email = identity.identityValue
                identity.name = formData.get("name");
            }
            if (identity.identityType === "MOBILE") {
                data.phone = identity.identityValue
            }
            return identity;
        })

        axios
            .post(`${URL}/otpless/signup`, data)
            .then((result) => {
                console.log("post made");
                if (result.data.moreinfoneeded) {
                    const sd = {
                        reqd: result.data.reqd,
                        tbs: result.data.tbs,
                    };
                    console.log(sd, "This is sd data");
                    navigate("/signup", { state: sd });
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
    }

    return (
        <div className='signup-name-container'>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Hey, What's your name?</label>
                <input type="text" name="name" id="name" placeholder='Type your name here...' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Name