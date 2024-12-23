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
          labels: data.labels,  // Labels should represent years
          datasets: [
            {
              label: "", // Remove the label "Property Value Over Time"
              data: data.data,
              borderColor: "rgb(1, 112, 220)",
              pointRadius: 2,
              pointBackgroundColor: "rgb(255,255,255)",
              tension: 0.2,
              borderWidth: 2,
              fill: true, // Enable fill below the line
              backgroundColor: "rgba(0, 123, 255, 0)", // Set the fill color to transparent
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: false,
                text: "Years", // Change title to "Years"
                color: "#333",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
              grid: {
                display: false, // Hide grid lines for x-axis
              },
            },
            y: {
              display: false, // Remove y-axis completely
              beginAtZero: true,
              min: 0,
              max: Math.max(...data.data) + 100,
            },
          },
          plugins: {
            legend: {
              display: false, // Remove the legend
            },
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              titleColor: "#fff",
              bodyColor: "#fff",
              borderColor: "rgba(75, 192, 192, 1)",
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.dataset.label}: ₹${tooltipItem.raw.toLocaleString()}`;
                },
              },
            },
          },
        },
        plugins: [
          {
            id: "gradientFill",
            beforeDraw: (chart) => {
              const ctx = chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, chart.chartArea.bottom);

              // Set lighter colors for the gradient
              gradient.addColorStop(0, "rgba(0, 123, 255, 0.2)"); // Lighter start of gradient (light blue)
              gradient.addColorStop(1, "rgba(0, 123, 255, 0)");   // Transparent end of gradient

              const meta = chart.getDatasetMeta(0);

              // Set the gradient as the fill below the line
              ctx.save();
              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.moveTo(meta.data[0].x, meta.data[0].y);

              // Draw the line
              meta.data.forEach((point, index) => {
                if (index === 0) {
                  ctx.moveTo(point.x, point.y);
                } else {
                  ctx.lineTo(point.x, point.y);
                }
              });

              ctx.lineTo(meta.data[meta.data.length - 1].x, chart.chartArea.bottom);
              ctx.lineTo(meta.data[0].x, chart.chartArea.bottom);
              ctx.closePath();
              ctx.fill();
              ctx.restore();
            },
          },
        ],
      });
    } else if (chartInstance.current) {
      chartInstance.current.data = {
        labels: data.labels, // Update x-axis labels (years)
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
    <div style={{ width: "100%", height: "400px", margin: "0 auto", backgroundColor: "#ffffff" }}>
      <canvas ref={chartContainer}></canvas>
    </div>
  );
};

export default LineChart;
