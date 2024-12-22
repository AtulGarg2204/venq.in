import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Date = styled(Typography)`
  font-family: "Arial", sans-serif;
  font-size: 13px;
`;
const Heading = styled(Typography)`
  font-family: "Arial", sans-serif;
  font-size: 17px;
  font-weight: 600;
`;
const Information = styled(Typography)`
  font-family: "Arial", sans-serif;
  font-size: 14px;
  color: grey;
`;
const Content = styled(Box)`
  display: flex;
`;
const Container = styled(TimelineItem)`
  &:before {
    padding: 0;
    content: none;
  }
`;

// Define colors for different statuses or indices
const dotColors = [
  "#0170dc", // Color for the first item
  "#f50057", // Color for the second item
  "#ff9800", // Color for the third item
  "#4caf50", // Color for the fourth item
  "#3f51b5", // Color for the fifth item
];

const Period = ({ fundt }) => {
  return (
    <div style={{ color: "black" }}>
      <Timeline style={{ padding: "20px 0" }}>
        {fundt.map((item, index) => (
          <Container key={index}>
            <Content>
              <TimelineSeparator
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 10px",
                }}
              >
                <TimelineDot
                  variant="outlined"
                  style={{
                    border: `5px solid ${dotColors[index % dotColors.length]}`, // Use color based on index
                    width: "25px",
                    height: "25px",
                  }}
                />
                {index < fundt.length - 1 && (
                  <TimelineConnector style={{ height: "50px" }} />
                )}
              </TimelineSeparator>

              <TimelineContent>
                <Date>{item.date}</Date>
                <Heading>{item.description}</Heading>
                <Information>{item.details}</Information>
              </TimelineContent>
            </Content>
          </Container>
        ))}
      </Timeline>
    </div>
  );
};

export default Period;
