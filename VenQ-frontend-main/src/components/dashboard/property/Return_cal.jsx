import React, { useState } from "react";
import "./Return_cal.css";
import {
  Box,
  Button,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
  styled,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  useMediaQuery,
  TextField,
} from "@mui/material";
const Return_cal = () => {
  const [initialInvestment, setInitialInvestment] = useState(20000);
  const [finalInvestment, setFinalInvestment] = useState(
    initialInvestment + initialInvestment * 0.3
  );
  const [year, setYear] = useState(3);
  return (
    <div className="cal-image">
      <Typography
        style={{
          fontSize: "18px",
          fontWeight: 600,
          fontFamily: "Inter",
          color: "#44475b",
          padding: "20px 0",
        }}
      >
        ₹{initialInvestment} One Time
      </Typography>
      <input
        className="cal-radio-input"
        type="range"
        min="20000"
        max="250000"
        step="500"
        value={initialInvestment}
        onChange={(e) => setInitialInvestment(parseInt(e.target.value))}
        style={{
          marginTop: "25px",
          marginBottom: "60px",
        }}
      />
      <p
        style={{
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Inter",
          color: "#44475b",
        }}
      >
        Over the Past
      </p>
      <div className="cal-button-container">
        <button
          style={{
            border: "none",
            background: year === 3 ? "#E8FAF5" : "none",
            color: year === 3 ? "#00B368" : "black",
            height: "30px",
            borderRadius: "20px",
            marginRight: "10px",
            // marginLeft: "-10px",
          }}
          onClick={() => {
            setYear(3);
            setFinalInvestment(initialInvestment + initialInvestment * 0.9);
          }}
        >
          3 year
        </button>
        <button
          style={{
            border: "none",
            background: year === 5 ? "#E8FAF5" : "none",
            color: year === 5 ? "#00B368" : "black",
            height: "30px",
            borderRadius: "20px",
            marginRight: "10px",
          }}
          onClick={() => {
            setYear(5);
            setFinalInvestment(initialInvestment + initialInvestment * 1.5);
          }}
        >
          5 years{" "}
        </button>
        <button
          style={{
            height: "30px",
            borderRadius: "20px",
            marginRight: "1px",
            marginLeft: "5px",
            border: "none",
            background: year === 7 ? "#E8FAF5" : "none",
            color: year === 7 ? "#00B368" : "black",
          }}
          onClick={() => {
            setYear(7);
            setFinalInvestment(initialInvestment + initialInvestment * 2.1);
          }}
        >
          7 years
        </button>
      </div>
      <hr />
      <Typography
        style={{
          fontSize: "15px",
          color: "rgb(112,111,111)",
          fontFamily: "Inter",
          marginTop: "30px",
        }}
      >
        Total investment of ₹ {initialInvestment}
      </Typography>
      <Typography
        style={{
          fontSize: "18px",
          fontWeight: 600,
          fontFamily: "Inter",
          color: "#44475b",
          padding: "20px 0",
        }}
      >
        Would have become ₹
        <span
          style={{
            fontSize: "18px",
            fontWeight: 600,
            fontFamily: "Inter",
            padding: "20px 0",
            color: "#00B368",
          }}
        >
          {year === 3 && initialInvestment + initialInvestment * 0.9}
          {year === 5 && initialInvestment + initialInvestment * 1.5}
          {year === 7 && initialInvestment + initialInvestment * 2.1}{" "}
        </span>
      </Typography>
    </div>
  );
};

export default Return_cal;