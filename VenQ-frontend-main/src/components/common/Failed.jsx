import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"; // Import the cross icon
import { useNavigate } from "react-router-dom";

const Failed = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard/portfolio");
    }, 5000);

    const interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={"80px"}
      minWidth={"400px"}
    >
      <FontAwesomeIcon icon={faTimesCircle} color="red" size="8x" />{" "}
      {/* Changed to cross icon */}
      <h2 style={{ color: "black" }}>Payment Failed</h2>
      <p>Redirecting to Portfolio in {count} seconds</p>
    </Box>
  );
};

export default Failed;
