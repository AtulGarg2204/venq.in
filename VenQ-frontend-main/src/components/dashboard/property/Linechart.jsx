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
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, LineController, Filler);

const LineChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer.current && data && !chartInstance.current) {
      const ctx = chartContainer.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Property Value Over Time",
              data: data.data,
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.2)",
              pointRadius: 2,
              pointBackgroundColor: "rgb(255,255,255)",
              tension: 0.2,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: "Time",
                color: "#333",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1,
              },
            },
            y: {
              title: {
                display: true,
                text: "Property Value (INR / SQFT)",
                color: "#333",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1,
              },
              beginAtZero: true,
              min: 0,
              max: Math.max(...data.data) + 100,
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                color: "#333",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              titleColor: "#fff",
              bodyColor: "#fff",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.dataset.label}: ₹${tooltipItem.raw.toLocaleString()}`;
                },
              },
            },
          },
        },
      });
    } else if (chartInstance.current) {
      // Update the chart with new data without re-instantiating
      chartInstance.current.data = {
        labels: data.labels,
        datasets: [
          {
            ...chartInstance.current.data.datasets[0],
            data: data.data,
          },
        ],
      };
      chartInstance.current.update();
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [data]);

  return (
    <div style={{ width: "80%", height: "400px", margin: "0 auto", backgroundColor: "#ffffff" }}>
      <canvas ref={chartContainer}></canvas>
    </div>
  );
};

export default LineChart;
