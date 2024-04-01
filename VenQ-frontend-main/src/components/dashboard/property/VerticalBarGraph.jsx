import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip } from 'chart.js';
import { Box, Typography, styled } from '@mui/material';

const Label = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`
const LabelName = styled(Typography)`
  font-family: 'Inter';
  font-size: 18px;
  color: grey;
`
const LabelAmount = styled(Typography)`
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 600;
`
const LabelSlider = styled('input')`
  width: 100%;
  cursor: pointer;
  background-color: #0170dc;
  border-radius: 10px;
  height: 10px;
`


const VerticalBarGraph = ({ investment, propertyValueGrowth, rentalYield, handleInvestmentChange, handlePropertyValueGrowthChange, handleRentalYieldChange }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.8)');
    gradient.addColorStop(0.5, 'rgba(54, 162, 235, 0.5)');
    gradient.addColorStop(1, 'rgba(54, 162, 235, 0.2)');

    const data = {
      labels: ['2024', '2025', '2026'],
      datasets: [
        {
          label: 'Investment',
          data: [investment, investment, investment],
          backgroundColor: 'rgba(10, 10, 10, 1)',
        },
        {
          label: 'Total Rental Income',
          data: [
            (rentalYield*(investment))/100,
            (rentalYield*(2*investment))/100,
            (rentalYield*(3*investment))/100,
          ],
          backgroundColor: 'rgba(94, 71, 242, 1)',
        },
        {
          label: 'Value Appreciation',
          data: [
            (propertyValueGrowth*(investment))/300,
            (propertyValueGrowth*(2*investment))/300,
            (propertyValueGrowth*(3*investment))/300,
          ],
          backgroundColor: 'rgb(65, 206, 142)',
        },
      ],
    };

    const options = {
      scales: {
        x: {
          type: 'category',
          stacked: true,
          beginAtZero: false,
          labels: ['2024', '2025', '2026'],
        },
        y: {
          type: 'linear',
          beginAtZero: false,
          stacked:true,
          ticks: {
            stepSize: 30000,
            suggestedMin: 500,
            suggestedMax: 300000,
          },
        },
      },
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip);

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, [investment, propertyValueGrowth, rentalYield]);

  return (
    <div>
      <canvas ref={chartRef} style={{ padding: '30px 30px 0px 30px' }} />

      <Box style={{ padding: '30px 30px 20px 30px' }}>

        <Box>
          <Label>
            <LabelName>Investment:</LabelName>
            <LabelAmount>RUP {investment}</LabelAmount>
          </Label>

          <LabelSlider
            type="range"
            min="50000"
            max="5000000"
            step="50000"
            value={investment}
            onChange={handleInvestmentChange}
          />
        </Box>

        <Box>
          <Label>
            <LabelName>Property Value Growth (3 years):</LabelName>
            <LabelAmount>{propertyValueGrowth} %</LabelAmount>
          </Label>

          <LabelSlider
            type="range"
            min="0"
            max="100"
            step="5"
            value={propertyValueGrowth}
            onChange={handlePropertyValueGrowthChange}
          />
        </Box>

        <Box>
          <Label>
            <LabelName>Expected Annual Rental Yield:</LabelName>
            <LabelAmount> {rentalYield} %</LabelAmount>
          </Label>

          <LabelSlider
            type="range"
            min="0"
            max="15"
            step="1"
            value={rentalYield}
            onChange={handleRentalYieldChange}
          />
        </Box>

      </Box>

    </div>
  );
};

export default VerticalBarGraph;
