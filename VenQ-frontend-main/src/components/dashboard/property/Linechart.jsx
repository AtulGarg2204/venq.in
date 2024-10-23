import { Chart } from "chart.js";
import React, { useEffect, useRef } from "react";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

// Register necessary components including Filler plugin
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, LineController, Filler);

const LineChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer.current && data) {
      const ctx = chartContainer.current.getContext("2d");
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Property Value Over Time",
              data: data.data,
              borderColor: "blue", // Line color
              backgroundColor: "rgba(0, 0, 255, 0.2)", // Optional background color
              pointRadius: 2, // Reduced point size to minimize deflection impact
              pointBackgroundColor: "rgb(255,255,255)", // Point color
              tension: 0.2, // Smoother line (adjusted tension)
              fill: true, // Fill area under the line
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Maintain aspect ratio based on container size
          scales: {
            x: {
              title: {
                display: true,
                text: "Time", // Label for X-axis
                color: "#333",
                font: {
                  size: 16,
                  weight: 'bold',
                },
              },
              grid: {
                color: "rgba(0, 0, 0, 0.1)", // Grid line color
                lineWidth: 1, // Grid line width
              },
            },
            y: {
              title: {
                display: true,
                text: "Property Value (INR / SQFT)", // Label for Y-axis
                color: "#333",
                font: {
                  size: 16,
                  weight: 'bold',
                },
              },
              grid: {
                color: "rgba(0, 0, 0, 0.1)", // Grid line color
                lineWidth: 1, // Grid line width
              },
              beginAtZero: true, // Start Y-axis at zero
              min: 0, // Minimum Y-axis value
              max: Math.max(...data.data) + 100, // Set max to a value slightly above the highest data point
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "top", // Position of the legend
              labels: {
                color: "#333", // Legend label color
                font: {
                  size: 14,
                  weight: 'bold',
                },
              },
            },
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Tooltip background color
              titleColor: "#fff", // Tooltip title color
              bodyColor: "#fff", // Tooltip body color
              borderColor: "rgba(75, 192, 192, 1)", // Tooltip border color
              borderWidth: 1, // Tooltip border width
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.dataset.label}: ₹${tooltipItem.raw.toLocaleString()}`;
                },
              },
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div style={{
      width: "80%", // Adjust this value to reduce/increase width (e.g., "60%", "400px")
      height: "400px",
      margin: "0 auto", // Center the chart horizontally
      backgroundColor: "#ffffff", // Set background to white
    }}>
      <canvas ref={chartContainer}></canvas>
    </div>
  );
};

export default LineChart;
