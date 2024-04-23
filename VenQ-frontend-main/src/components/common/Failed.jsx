import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Failed = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard/portfolio");
    }, 5000);
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={"80px"}
      minWidth={"400px"}
    >
      <FontAwesomeIcon icon={faCheckCircle} color="Red" size="8x" />
      <h2 style={{ color: "black" }}>Payment Failed</h2>
      <p>Redirecting to Portfolio in {count} seconds</p>
    </Box>
  );
};
export default Failed;
