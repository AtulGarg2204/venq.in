import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import config from "../../config";
import axios from "axios";
const SuccessPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [count, setCount] = useState(5);
  const [minAmount, setMinAmount] = useState(0);
  const quantity = JSON.parse(localStorage.getItem("units"));
  const URL = config.URL;
  console.log("quantity  of stcok invested", quantity);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard/portfolio");
    }, 15000);
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    const getUrlParams = () => {
      const queryParams = new URLSearchParams(window.location.search);
      return {
        name: queryParams.get("name") || "",
        propertyName: queryParams.get("propertyName") || "",
      };
    };
    const { name, propertyName } = getUrlParams();

    const fetchListing = async () => {
      try {
        const response = await axios.get(
          `${URL}/listing/byName/${encodeURIComponent(propertyName)}`
        );
        console.log(
          response.data.mininvestment,
          "this is the minimum investment amount"
        );

        const minInvestmentString = response.data.mininvestment;
        const numericValue = minInvestmentString.replace(/\D/g, "");
        const minInvestment = parseInt(numericValue, 10);

        console.log(minInvestment, "this is the minimum investment amount");

        setMinAmount(minInvestment); // Set minAmount here

        const userinfo = JSON.parse(localStorage.getItem("userinfo"));
        if (!userinfo || !userinfo._id) {
          console.error("Customer ID not found in localStorage");
          return;
        }
        const customerId = userinfo._id;
        const requestBody = {
          propertyName: propertyName,
          amount: minInvestment * quantity, // Use minInvestment here
          quantity: quantity,
        };

        console.log(requestBody, "requestedBody");

        axios
          .post(`${URL}/purchased/${customerId}`, requestBody)
          .then((response) => {
            console.log(response.data, "responseeeee");
            if (!response.status === 201) {
              throw new Error("Network response was not ok");
            }
            console.log("Investment added successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error adding investment:", error);
          });
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };
    fetchListing();
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/dashboard/portfolio");
  //   }, 15000);
  //   setInterval(() => {
  //     setCount((count) => count - 1);
  //   }, 1000);
  //   const getUrlParams = () => {
  //     const queryParams = new URLSearchParams(window.location.search);
  //     return {
  //       name: queryParams.get("name") || "",
  //       propertyName: queryParams.get("propertyName") || "",
  //     };
  //   };
  //   const { name, propertyName } = getUrlParams();
  //   // setName(name);
  //   setPropertyName(propertyName);
  //   const userinfo = JSON.parse(localStorage.getItem("userinfo"));
  //   try {
  //     const response = axios
  //       .get(
  //         `http://localhost:4000/listing/byName/${encodeURIComponent(
  //           propertyName
  //         )}`
  //       )
  //       .then((response) => {
  //         console.log(
  //           response.data.mininvestment,
  //           "this is the minimum investment amount"
  //         );
  //         // Assuming response.data.mininvestment is in the format "Rs 5,000"
  //         const minInvestmentString = response.data.mininvestment;

  //         // Remove non-numeric characters and commas
  //         const numericValue = minInvestmentString.replace(/\D/g, "");

  //         // Convert the string to a number
  //         const minInvestment = parseInt(numericValue, 10);

  //         // Log the converted value
  //         console.log(minInvestment, "this is the minimum investment amount");

  //         // Set the minimum investment amount
  //         setMinAmount(minInvestment);
  //       });
  //   } catch (error) {
  //     console.error("Error fetching listing:", error);
  //   }

  //   if (!userinfo || !userinfo._id) {
  //     console.error("Customer ID not found in localStorage");
  //     return;
  //   }
  //   const customerId = userinfo._id;
  //   const requestBody = {
  //     propertyName: propertyName,
  //     amount: 10000,
  //     quantity: quantity,
  //   };

  //   console.log(requestBody, "requestedBody");
  //   axios
  //     .post(`http://localhost:4000/purchased/${customerId}`, requestBody)
  //     .then((response) => {
  //       console.log(response.data, "responseeeee");
  //       // Check if response is OK
  //       if (!response.status === 201) {
  //         throw new Error("Network response was not ok");
  //       }
  //       console.log("Investment added successfully:", response.data);
  //       // Optionally, you can perform any actions after successful addition of investment
  //     })
  //     .catch((error) => {
  //       console.error("Error adding investment:", error);
  //       // Handle errors or display error message to the user
  //     });
  // }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={"80px"}
      minWidth={"400px"}
    >
      <FontAwesomeIcon icon={faCheckCircle} color="green" size="8x" />
      <h2 style={{ color: "black" }}>Payment verified Successfully</h2>
      <p>Redirecting to Portfolio in {count} seconds</p>
    </Box>
  );
};
export default SuccessPage;
