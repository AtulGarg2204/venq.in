import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (chartInstance.current) {
        // Destroy existing chart instance
        chartInstance.current.destroy();
      }

      const ctx = chartContainer.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
          ],
          datasets: [
            {
              label: "", // Remove dataset label
              data: [
                65, 59, 80, 81, 56, 55, 34, 61, 68, 70, 74, 82, 90, 91, 93,
              ],
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
              fill: false,
              pointRadius: 0, // Remove point circles
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false, // Remove chart legend
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  return "Value: " + context.raw;
                },
              },
            },
          },
          interaction: {
            mode: "nearest", // Tooltip mode
            axis: "x", // Axis for finding the nearest item
            intersect: false, // Display tooltip even if not intersecting a point
          },
          scales: {
            x: {
              grid: {
                display: false, // Remove vertical grid lines
              },
              ticks: {
                display: false, // Remove x-axis labels
              },
              border: {
                display: false, // Remove x-axis line
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false, // Remove horizontal grid lines
              },
              ticks: {
                display: false, // Remove y-axis labels
              },
              border: {
                display: false, // Remove y-axis line
              },
            },
          },
        },
      });
    }
  }, []);

  return (
    <div style={{ width: "auto", height: "auto" }}>
      <canvas ref={chartContainer}></canvas>
    </div>
  );
};

export default LineChart;
