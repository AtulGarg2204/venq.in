
// different style of graph
// import React, { useState } from 'react';
// import Plot from 'react-plotly.js';

// const InterestGraph = () => {
//     // State variables for input values and calculation results
//     const [initialInvestment, setInitialInvestment] = useState('');
//     const [monthlyContribution, setMonthlyContribution] = useState('');
//     const [lengthOfTime, setLengthOfTime] = useState('3');
//     const [interestRate, setInterestRate] = useState('6.00'); // Default interest rate
//     const [compoundFrequency, setCompoundFrequency] = useState('annually');
//     const [finalAmount, setFinalAmount] = useState(null);
//     const [rentalAmount, setRentalAmount] = useState(null);
//     const [graphData, setGraphData] = useState([]);

//     // Options for interest rate and compound frequency
//     const interestRateOptions = ['5.25', '5.50', '5.75', '6.00', '6.25', '6.50'];

//     // Function to handle the form submission and calculate compound interest
//     const handleCalculate = (e) => {
//         e.preventDefault();

//         // Convert interest rate to decimal and years to integer
//         const decimalInterestRate = parseFloat(interestRate) / 100;
//         const years = parseInt(lengthOfTime);

//         // Convert inputs to numbers
//         const totalInitialInvestment = parseFloat(initialInvestment);
//         const totalMonthlyContribution = parseFloat(monthlyContribution);

//         // Array to store compound interest values over time
//         const interestRateArray = [];

//         // Calculate compound interest for each year
//         let total = totalInitialInvestment;
//         for (let i = 0; i < years; i++) {
//             const monthlyInterest = (total * decimalInterestRate) / getCompoundFrequencyValue(compoundFrequency);
//             total = total + monthlyInterest + (totalMonthlyContribution * 12);
//             interestRateArray.push(total);
//         }

//         // Set the final amount and rental amount
//         const finalAmountValue = total.toFixed(2);
//         setFinalAmount(finalAmountValue);

//         const rentalAmountValue = (parseFloat(finalAmountValue) * 0.03) / 12;
//         setRentalAmount(rentalAmountValue.toFixed(2));

//         // Set interest rate data for plotting
//         const interestRateData = {
//             x: Array.from({ length: years }, (_, i) => i + 1),
//             y: interestRateArray,
//             type: 'scatter',
//             mode: 'lines+markers',
//             marker: { color: 'blue' },
//             name: 'Compound Interest',
//         };

//         setGraphData([interestRateData]);
//     };

//     // Helper function to get the compounding frequency value
//     const getCompoundFrequencyValue = (frequency) => {
//         switch (frequency) {
//             case 'annually':
//                 return 1;
//             case 'semi-annually':
//                 return 2;
//             case 'monthly':
//                 return 12;
//             case 'quarterly':
//                 return 4;
//             case 'daily':
//                 return 365;
//             default:
//                 return 1; // Default to annual compounding
//         }
//     };

//     return (
//         <div>
//             <h1>Compound Interest Calculator (INR)</h1>
//             {/* Display final amount if calculated */}
//             {finalAmount && (
//                 <div>
//                     <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
//                         Final Amount: ₹{finalAmount}
//                     </p>
//                     <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
//                         Rental Amount (Monthly): ₹{rentalAmount}
//                     </p>
//                 </div>
//             )}

//             {/* Form for input values */}
//             <form onSubmit={handleCalculate}>
//                 {/* Input for initial investment */}
//                 <label>
//                     Initial Investment (₹):
//                     <input
//                         type="number"
//                         step="0.01"
//                         value={initialInvestment}
//                         onChange={(e) => setInitialInvestment(e.target.value)}
//                         required
//                     />
//                 </label><br /><br />

//                 {/* Input for monthly contribution */}
//                 <label>
//                     Monthly Contribution (₹):
//                     <input
//                         type="number"
//                         step="0.01"
//                         value={monthlyContribution}
//                         onChange={(e) => setMonthlyContribution(e.target.value)}
//                         required
//                     />
//                 </label><br /><br />

//                 {/* Dropdown for length of time */}
//                 <label>
//                     Length of Time (years):
//                     <select value={lengthOfTime} onChange={(e) => setLengthOfTime(e.target.value)}>
//                         {Array.from({ length: 8 }, (_, i) => i + 3).map((year) => (
//                             <option key={year} value={year}>{year} years</option>
//                         ))}
//                     </select>
//                 </label><br /><br />

//                 {/* Dropdown for interest rate */}
//                 <label>
//                     Estimate Interest Rate (%):
//                     <select value={interestRate} onChange={(e) => setInterestRate(e.target.value)}>
//                         {interestRateOptions.map((rate) => (
//                             <option key={rate} value={rate}>{rate}%</option>
//                         ))}
//                     </select>
//                 </label><br /><br />

//                 {/* Display fixed interest rate variance */}
//                 <label>
//                     Interest Rate Variance Range:
//                     <input
//                         type="text"
//                         value="5%" // Fixed interest rate variance
//                         readOnly
//                     />
//                 </label><br /><br />

//                 {/* Dropdown for compound frequency */}
//                 <label>
//                     Compound Frequency:
//                     <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(e.target.value)}>
//                         <option value="annually">Annually</option>
//                         <option value="semi-annually">Semi-annually</option>
//                         <option value="monthly">Monthly</option>
//                         <option value="quarterly">Quarterly</option>
//                         <option value="daily">Daily</option>
//                     </select>
//                 </label><br /><br />

//                 {/* Button to calculate compound interest */}
//                 <button type="submit">Calculate</button>
//             </form>

//             {/* Display the compound interest results graph */}
//             {graphData.length > 0 && (
//                 <div>
//                     <h2>Compound Interest Results</h2>
//                     <Plot
//                         data={graphData}
//                         layout={{ width: 800, height: 500, title: 'Compound Interest Graph (INR)' }}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default InterestGraph;






// one graph line code compound line
// import React, { useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';

// const InterestGraph = () => {
//     const [initialInvestment, setInitialInvestment] = useState('');
//     const [monthlyContribution, setMonthlyContribution] = useState('');
//     const [lengthOfTime, setLengthOfTime] = useState('3');
//     const [interestRate, setInterestRate] = useState('6.00'); // Default interest rate
//     const [compoundFrequency, setCompoundFrequency] = useState('annually');
//     const [finalAmount, setFinalAmount] = useState(null);
//     const [rentalAmount, setRentalAmount] = useState(null);
//     const [interestRateData, setInterestRateData] = useState([]); // State to store interest rate data for chart

//     const interestRateOptions = ['5.25', '5.50', '5.75', '6.00', '6.25', '6.50'];

//     const handleCalculate = (e) => {
//         e.preventDefault();

//         const decimalInterestRate = parseFloat(interestRate) / 100;
//         const years = parseInt(lengthOfTime);

//         const totalInitialInvestment = parseFloat(initialInvestment);
//         const totalMonthlyContribution = parseFloat(monthlyContribution);

//         const data = [];

//         let total = totalInitialInvestment;
//         for (let i = 0; i < years; i++) {
//             const monthlyInterest = (total * decimalInterestRate) / getCompoundFrequencyValue(compoundFrequency);
//             total = total + monthlyInterest + (totalMonthlyContribution * 12);
//             const yearData = {
//                 year: i + 1,
//                 amount: total,
//             };
//             data.push(yearData);
//         }

//         setFinalAmount(total.toFixed(2));

//         const rentalAmountValue = (parseFloat(total) * 0.03) / 12;
//         setRentalAmount(rentalAmountValue.toFixed(2));

//         setInterestRateData(data); // Update state with interest rate data for chart
//     };

//     const getCompoundFrequencyValue = (frequency) => {
//         switch (frequency) {
//             case 'annually':
//                 return 1;
//             case 'semi-annually':
//                 return 2;
//             case 'monthly':
//                 return 12;
//             case 'quarterly':
//                 return 4;
//             case 'daily':
//                 return 365;
//             default:
//                 return 1; // Default to annual compounding
//         }
//     };

//     return (
//         <div>
//             <h1>Compound Interest Calculator (INR)</h1>
//             {finalAmount && (
//                 <div>
//                     <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
//                         Final Amount: ₹{finalAmount}
//                     </p>
//                     <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
//                         Rental Amount (Monthly): ₹{rentalAmount}
//                     </p>
//                 </div>
//             )}

//             <form onSubmit={handleCalculate}>
//                 <label>
//                     Initial Investment (₹):
//                     <input
//                         type="number"
//                         step="0.01"
//                         value={initialInvestment}
//                         onChange={(e) => setInitialInvestment(e.target.value)}
//                         required
//                     />
//                 </label><br /><br />

//                 <label>
//                     Monthly Contribution (₹):
//                     <input
//                         type="number"
//                         step="0.01"
//                         value={monthlyContribution}
//                         onChange={(e) => setMonthlyContribution(e.target.value)}
//                         required
//                     />
//                 </label><br /><br />

//                 <label>
//                     Length of Time (years):
//                     <select value={lengthOfTime} onChange={(e) => setLengthOfTime(e.target.value)}>
//                         {Array.from({ length: 8 }, (_, i) => i + 3).map((year) => (
//                             <option key={year} value={year}>{year} years</option>
//                         ))}
//                     </select>
//                 </label><br /><br />

//                 <label>
//                     Estimate Interest Rate (%):
//                     <select value={interestRate} onChange={(e) => setInterestRate(e.target.value)}>
//                         {interestRateOptions.map((rate) => (
//                             <option key={rate} value={rate}>{rate}%</option>
//                         ))}
//                     </select>
//                 </label><br /><br />

//                 <label>
//                     Interest Rate Variance Range:
//                     <input
//                         type="text"
//                         value="5%" // Fixed interest rate variance
//                         readOnly
//                     />
//                 </label><br /><br />

//                 <label>
//                     Compound Frequency:
//                     <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(e.target.value)}>
//                         <option value="annually">Annually</option>
//                         <option value="semi-annually">Semi-annually</option>
//                         <option value="monthly">Monthly</option>
//                         <option value="quarterly">Quarterly</option>
//                         <option value="daily">Daily</option>
//                     </select>
//                 </label><br /><br />

//                 <button type="submit">Calculate</button>
//             </form>

//             {finalAmount && (
//                 <div>
//                     <h2>Compound Interest Results</h2>
//                     <LineChart
//                         width={800}
//                         height={500}
//                         data={interestRateData}
//                         margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
//                     >
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="year" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
//                         <Area type="monotone" dataKey="amount" fill="#8884d8" fillOpacity={0.3} />
//                     </LineChart>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default InterestGraph;





// two lines variance line and compund line
// import React, { useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const InterestGraph = () => {
//     const [initialInvestment, setInitialInvestment] = useState('');
//     const [monthlyContribution, setMonthlyContribution] = useState('');
//     const [lengthOfTime, setLengthOfTime] = useState('3');
//     const [interestRate, setInterestRate] = useState('6.00'); // Default interest rate
//     const [compoundFrequency, setCompoundFrequency] = useState('annually');
//     const [finalAmount, setFinalAmount] = useState(null);
//     const [rentalAmount, setRentalAmount] = useState(null);
//     const [interestRateData, setInterestRateData] = useState([]); // State to store interest rate data for chart

//     const interestRateOptions = ['5.25', '5.50', '5.75', '6.00', '6.25', '6.50'];

//     const handleCalculate = (e) => {
//         e.preventDefault();

//         const decimalInterestRate = parseFloat(interestRate) / 100;
//         const years = parseInt(lengthOfTime);

//         const totalInitialInvestment = parseFloat(initialInvestment);
//         const totalMonthlyContribution = parseFloat(monthlyContribution);

//         const data = [];

//         let total = totalInitialInvestment;
//         for (let i = 0; i < years; i++) {
//             const monthlyInterest = (total * decimalInterestRate) / getCompoundFrequencyValue(compoundFrequency);
//             total = total + monthlyInterest + (totalMonthlyContribution * 12);
//             const yearData = {
//                 year: i + 1,
//                 amount: total,
//             };
//             data.push(yearData);
//         }

//         setFinalAmount(total.toFixed(2));

//         const rentalAmountValue = (parseFloat(total) * 0.03) / 12;
//         setRentalAmount(rentalAmountValue.toFixed(2));

//         setInterestRateData(data); // Update state with interest rate data for chart
//     };

//     const getCompoundFrequencyValue = (frequency) => {
//         switch (frequency) {
//             case 'annually':
//                 return 1;
//             case 'semi-annually':
//                 return 2;
//             case 'monthly':
//                 return 12;
//             case 'quarterly':
//                 return 4;
//             case 'daily':
//                 return 365;
//             default:
//                 return 1; // Default to annual compounding
//         }
//     };

//     return (
//         <div>
//             <h1>Compound Interest Calculator (INR)</h1>
//             {finalAmount && (
//                 <div>
//                     <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
//                         Final Amount: ₹{finalAmount}
//                     </p>
//                     <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
//                         Rental Amount (Monthly): ₹{rentalAmount}
//                     </p>
//                 </div>
//             )}

//             <form onSubmit={handleCalculate}>
//                 <label>
//                     Initial Investment (₹):
//                     <input
//                         type="number"
//                         step="0.01"
//                         value={initialInvestment}
//                         onChange={(e) => setInitialInvestment(e.target.value)}
//                         required
//                     />
//                 </label><br /><br />

//                 <label>
//                     Monthly Contribution (₹):
//                     <input
//                         type="number"
//                         step="0.01"
//                         value={monthlyContribution}
//                         onChange={(e) => setMonthlyContribution(e.target.value)}
//                         required
//                     />
//                 </label><br /><br />

//                 <label>
//                     Length of Time (years):
//                     <select value={lengthOfTime} onChange={(e) => setLengthOfTime(e.target.value)}>
//                         {Array.from({ length: 8 }, (_, i) => i + 3).map((year) => (
//                             <option key={year} value={year}>{year} years</option>
//                         ))}
//                     </select>
//                 </label><br /><br />

//                 <label>
//                     Estimate Interest Rate (%):
//                     <select value={interestRate} onChange={(e) => setInterestRate(e.target.value)}>
//                         {interestRateOptions.map((rate) => (
//                             <option key={rate} value={rate}>{rate}%</option>
//                         ))}
//                     </select>
//                 </label><br /><br />

//                 <label>
//                     Interest Rate Variance Range:
//                     <input
//                         type="text"
//                         value="5%" // Fixed interest rate variance
//                         readOnly
//                     />
//                 </label><br /><br />

//                 <label>
//                     Compound Frequency:
//                     <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(e.target.value)}>
//                         <option value="annually">Annually</option>
//                         <option value="semi-annually">Semi-annually</option>
//                         <option value="monthly">Monthly</option>
//                         <option value="quarterly">Quarterly</option>
//                         <option value="daily">Daily</option>
//                     </select>
//                 </label><br /><br />

//                 <button type="submit">Calculate</button>
//             </form>

//             {finalAmount && (
//                 <div>
//                     <h2>Compound Interest Results</h2>
//                     <LineChart
//                         width={800}
//                         height={500}
//                         data={interestRateData}
//                         margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
//                     >
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="year" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
//                         {/* Additional line for fixed 5% interest rate variance */}
//                         <Line
//                             type="monotone"
//                             dataKey={(entry) => entry.amount * 1.05} // Apply a 5% increase to the amount
//                             stroke="#82ca9d"
//                             name="+5% Variance"
//                         />
//                     </LineChart>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default InterestGraph;




// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const InterestGraph = () => {
//     const [initialInvestment, setInitialInvestment] = useState('10000');
//     const [monthlyContribution, setMonthlyContribution] = useState('5000');
//     const [lengthOfTime, setLengthOfTime] = useState('3');
//     const [interestRate, setInterestRate] = useState('6.00'); // Default interest rate
//     const [compoundFrequency, setCompoundFrequency] = useState('annually');
//     const [finalAmount, setFinalAmount] = useState(null);
//     const [rentalAmount, setRentalAmount] = useState(null);
//     const [interestRateData, setInterestRateData] = useState([]);

//     const interestRateOptions = ['5.25', '5.50', '5.75', '6.00', '6.25', '6.50'];
//     const lengthOfTimeOptions = [3, 5, 7, 9, 11, 13, 15];

//     const handleCalculate = (e) => {
//         e.preventDefault();

//         const decimalInterestRate = parseFloat(interestRate) / 100;
//         const years = parseInt(lengthOfTime);

//         const totalInitialInvestment = parseFloat(initialInvestment);
//         const totalMonthlyContribution = parseFloat(monthlyContribution);

//         const data = [];

//         let total = totalInitialInvestment;
//         let totalInvested = totalInitialInvestment;

//         for (let i = 1; i <= years; i++) {
//             // Calculate interest for the current year
//             const yearlyInterest = total * decimalInterestRate;

//             // Add monthly contributions
//             const totalContributions = totalMonthlyContribution * 12 * i;

//             // Calculate compounded amount at the end of the year
//             total = total + yearlyInterest + totalMonthlyContribution * 12;

//             // Calculate total invested at the end of the year
//             totalInvested = totalInitialInvestment + totalContributions;

//             // Store data for the current year
//             const yearData = {
//                 year: i,
//                 amount: total,
//                 totalInvested,
//             };

//             data.push(yearData);
//         }

//         setFinalAmount(total.toFixed(2));

//         const rentalAmountValue = (parseFloat(total) * 0.03) / 12;
//         setRentalAmount(rentalAmountValue.toFixed(2));

//         setInterestRateData(data); // Update state with interest rate data for chart
//     };

//     useEffect(() => {
//         // Calculate and set initial default graph upon component mounting
//         handleCalculate({
//             preventDefault: () => {} // Dummy event object for initial calculation
//         });
//     }, []); // Empty dependency array to run this effect only once on initial mount

//     const yAxisFormatter = (value) => {
//         if (value >= 1e6) {
//             // Value is in millions
//             return `${(value / 1e6).toFixed(1)}M`;
//         } else if (value >= 1e3) {
//             // Value is in thousands
//             return `${(value / 1e3).toFixed(0)}k`;
//         } else {
//             // Value is less than 1000
//             return value.toFixed(0);
//         }
//     };

//     // Custom tooltip formatter function (display year along with value)
//     const tooltipFormatter = (value, name, props) => {
//         const year = props.payload.year;
//         return `${value} (${year} year)`;
//     };

//     return (
//         <div>
//             <h1>Compound Interest Calculator (INR)</h1>
//             {finalAmount && (
//                 <div>
//                     <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
//                         Final Amount: ₹{finalAmount}
//                     </p>
//                     <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
//                         Rental Amount (Monthly): ₹{rentalAmount}
//                     </p>
//                 </div>
//             )}

//             <form onSubmit={handleCalculate}>
//                 <label>
//                     Initial Investment (₹):
//                     <input
//                         type="number"
//                         step="0.01"
//                         value={initialInvestment}
//                         onChange={(e) => setInitialInvestment(e.target.value)}
//                         required
//                     />
//                 </label><br /><br />

//                 <label>
//                     Monthly Contribution (₹):
//                     <input
//                         type="number"
//                         step="0.01"
//                         value={monthlyContribution}
//                         onChange={(e) => setMonthlyContribution(e.target.value)}
//                         required
//                     />
//                 </label><br /><br />

//                 <label>
//                     Length of Time (years):
//                     <select value={lengthOfTime} onChange={(e) => setLengthOfTime(e.target.value)}>
//                         {lengthOfTimeOptions.map((years) => (
//                             <option key={years} value={years}>
//                                 {years} years
//                             </option>
//                         ))}
//                     </select>
//                 </label><br /><br />

//                 <label>
//                     Estimate Interest Rate (%):
//                     <select value={interestRate} onChange={(e) => setInterestRate(e.target.value)}>
//                         {interestRateOptions.map((rate) => (
//                             <option key={rate} value={rate}>{rate}%</option>
//                         ))}
//                     </select>
//                 </label><br /><br />

//                 <label>
//                     Compound Frequency:
//                     <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(e.target.value)}>
//                         <option value="annually">Annually</option>
//                         <option value="semi-annually">Semi-annually</option>
//                         <option value="monthly">Monthly</option>
//                         <option value="quarterly">Quarterly</option>
//                         <option value="daily">Daily</option>
//                     </select>
//                 </label><br /><br />

//                 <button type="submit">Calculate</button>
//             </form>

//             {finalAmount && (
//                 <div>
//                     <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Compound Interest Results</h2>
//                     <LineChart
//                         width={800}
//                         height={400}
//                         data={interestRateData}
//                         margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
//                     >
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="year" />
//                         <YAxis tickFormatter={yAxisFormatter} />
//                         <Tooltip formatter={tooltipFormatter} />
//                         <Legend />
//                         <Line type="monotone" dataKey="amount" stroke="#8884d8" name="Compound Amount" />
//                         <Line type="monotone" dataKey="totalInvested" stroke="#82ca9d" name="Total Invested" />
//                     </LineChart>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default InterestGraph;






import React, { useState, useEffect } from 'react';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./Interstgraph.css"
import config from "../../../config"

import { border } from '@mui/system';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import circle from "./interestgraphassets/Framecircle.png"
import apartment from "./interestgraphassets/apartment.png"
import building from "./interestgraphassets/building.png"
import plotting from "./interestgraphassets/plotting.png"
import villa from "./interestgraphassets/villa.png"
const InterestGraph = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(5000);
  const [lengthOfTime, setLengthOfTime] = useState('3');
  const [interestRate, setInterestRate] = useState('6.00');
  const [compoundFrequency, setCompoundFrequency] = useState('annually');
  const [finalAmount, setFinalAmount] = useState(null);
  const [rentalAmount, setRentalAmount] = useState(null);
  const [interestRateData, setInterestRateData] = useState([]);
  // ---------------------for live div home----------------
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [listings, setListings] = useState([]);
  const URL = config.URL;
  const navigate = useNavigate();
  // ---------------------for live div home----------------



  const Property = styled(Card)`
  background-color: white;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out; 
  &:hover {
    transform: translateY(-10px);
  }
`;
  const UpperPart = styled(Box)(({ theme }) => ({
    width: "100%",
    textAlign: "center",
    position: "absolute",
    top: "0%",
    left: " 0%",
    height: "200px",
    backgroundColor: "#121c30",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "20%",
      marginBottom: "20px",
    },
  }));
  const Text = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
`;
  const Subheader = styled(Box)`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  margin-left: 16px;
  & div {
    // height:20px;
    border: 1px solid lightgray;
    padding: 4px 5px;
    font-size: 14px;
    border-radius: 6px;
  }
`;

  const SubheaderFixed = styled(Box)`
  display: flex;
  position: fixed;
  top: 5px;
  left: 5px;
  font-size: 12px;
  gap: 10px;
`;

  const FixedBox = styled(Box)`
  background-color: white;
  color: black;
  position: fixed;
  bottom: 5px;
  right: 5px;
  font-family: "Inter";
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
`;

  const PriceBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 14px 0;
  margin-left: 4px;
  align-items: center;
`;
  const ReturnsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: #f6f7f9;
  font-family: "Inter";
  color: grey;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 15px;
  }
`;
  const Options = styled(Box)`
  margin-top: 165px;
  margin-left: 25%;
  background-color: white;
  padding: 0 5x;
  width: 50%;
  border-radius: 10px;
  display: flex;
  @media (max-width: 600px) {
    margin-left: 10%;
  }
`;
  const SmallOptions = styled(Box)`
  margin-top: 36%;
  margin-left: 10%;
  background-color: white;
  padding: 0 5x;
  width: 50%;
  border-radius: 10px;
  display: flex;
`;
  const OptionName = styled(Button)`
  // border: 2px solid black;
  padding: 10px 45px;
  margin: 10px;
  width: 150%;
  border-radius: 10px;
  background-color: ${(props) =>
      props.active ? "#0170dc !important" : "white"};
  color: ${(props) => (props.active ? "white !important" : "black")};
  &:hover {
    background-color: #0170dc;
    color: white;
    border: none;
  }
  &:focus {
    background-color: #0170dc;
    color: white;
  }
`;
  const Category = styled(Typography)`
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: #0170dc;
  color: white;
  z-index: 2;
  padding: 5px;
  font-family: "Inter";
`;
  const Header = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  height: 30px;
  display: flex;
  align-items: center;
  font-family: "Gilroy-Bold";
  margin-top: 10px;
  margin-left: 20px;
`;

  const SubText = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  font-family: "Bebes Neue";
  font-style: normal;
`;


  // ---------------------for live div home----------------

  const interestRateOptions = ['5.25', '5.50', '5.75', '6.00', '6.25', '6.50'];
  const lengthOfTimeOptions = [3, 5, 7, 9, 11, 13, 15];

  const screenWidth = window.innerWidth;
  const chartWidth = screenWidth >= 768 ? 450 : 330;

  const handleCalculate = () => {


    const decimalInterestRate = parseFloat(interestRate) / 100;
    const years = parseInt(lengthOfTime);

    const totalInitialInvestment = parseFloat(initialInvestment);
    const totalMonthlyContribution = parseFloat(monthlyContribution);

    const data = [];

    let total = totalInitialInvestment;
    let totalInvested = totalInitialInvestment;

    for (let i = 1; i <= years; i++) {
      const yearlyInterest = total * decimalInterestRate;

      const totalContributions = totalMonthlyContribution * 12 * i;

      total = total + yearlyInterest + totalMonthlyContribution * 12;

      totalInvested = totalInitialInvestment + totalContributions;

      const yearData = {
        year: i,
        amount: total,
        totalInvested,
      };

      data.push(yearData);
    }

    setFinalAmount(total.toFixed(2));

    const rentalAmountValue = (parseFloat(total) * 0.03) / 12;
    setRentalAmount(rentalAmountValue.toFixed(2));

    setInterestRateData(data);
  };


  useEffect(() => {

    // ---------------------for live div home----------------
    if (JSON.parse(localStorage.getItem("userinfo"))) {
      setLoggedIn(true);
    }
    axios
      .get(`${URL}/listing`)

      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // ---------------------for live div home----------------
    handleCalculate();
  }, [initialInvestment, monthlyContribution, lengthOfTime, interestRate, compoundFrequency]);

  const yAxisFormatter = (value) => {
    if (value >= 1e6) {
      return `${(value / 1e6).toFixed(1)}M`;
    } else if (value >= 1e3) {
      return `${(value / 1e3).toFixed(0)}k`;
    } else {
      return value.toFixed(0);
    }
  };

  const tooltipFormatter = (value, name, props) => {
    const year = props.payload.year;
    return `${value} (${year} year)`;
  };

  const BottomHalfCircle = {
    width: 700,
    height: 700 / 2,
    border: "solid blue",
  };


  return (
    <div className='head'>
      <div className='compound_main'>
        <div className='compound_calculater_makemoney_main'>
          <p className='how_will_i_make_money'>How will I make money?</p>
          <h3  >Calculate your potential returns</h3>
          <div style={{ marginTop: "10px" }} className='compound_calculater_annualrental_main'>
            <div className='compound_calculater_annualrental_one'>
              <MoneyOutlinedIcon style={{ color: "rgb(32, 148, 118)" }} />
              <p>Annual Rental Yeild</p>
            </div>
            <p>Receive consistent passive income from monthly rental payments.</p>
            <div className='compound_calculater_annualrental_two' >
              <p>_____________</p>
              <AddCircleOutlineOutlinedIcon style={{ backgroundColor: "rgb(32, 148, 118)", color: "white", borderRadius: "50%" }} />
              <p>_____________</p>
            </div>
            <div className='compound_calculater_annualrental_three'>
              <MoneyOutlinedIcon style={{ color: "rgb(32, 148, 118)" }} />
              <p>Annual Appreciation</p>
            </div>
            <p>Watch your investment grow as the property value appreciates.</p>
          </div>
          <button
            onClick={() => navigate("/signup")}
          >Sign Up</button>

        </div>

        <div className='compound_calculater_form_main'>
          <form >


            <div className='compound_calculater_initInvest'>
              <div className='compound_calculater_initInvest_container_one'>
                <label>Initial Investment(₹):</label>
                <input
                  type="number"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(parseInt(e.target.value))}
                  required
                />
              </div>

              <input
                style={{ marginTop: "-8px" }}
                type="range"
                min="10000"
                max="2500000"
                step="1000"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(parseInt(e.target.value))}
              />
            </div>
            <div className='compound_calculater_monthlyInvestment'>
              <div className='compound_calculater_monthlyInvestment_container_one'>
                <label>
                  Monthly Contribution (₹): </label>
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
                  required
                />

              </div>
              <input
                style={{ marginTop: "-8px" }}
                type="range"
                min="2000"
                max="100000"
                step="100"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
              />

            </div>
            {finalAmount && (
              <div className='compound_calculater_totalamount_main'>
                <div className='compound_calculater_totalamount_container_one'>
                  <h1 style={{ color: "#0c625e" }}>₹ {finalAmount}</h1>
                  <p style={{ color: "rgba(82, 191, 131, 1)" }}>Final Amount</p>
                </div>
                <div className='compound_calculater_totalamount_container_one'>
                  <h1 style={{ color: "#0c625e" }}>₹ {rentalAmount}</h1>
                  <p style={{ color: "rgba(82, 191, 131, 1)" }}>Rental Amount (Monthly)</p>
                </div>
              </div>
            )}

            <div className='compound_calculater_graph_main'>
              <LineChart
                className='compound_chart'
                width={chartWidth}
                height={300}
                data={interestRateData}
                margin={{ top: 30, right: 5, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={yAxisFormatter} />
                <Tooltip formatter={tooltipFormatter} />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" name="Compound Amount" />
                <Line type="monotone" dataKey="totalInvested" stroke="#82ca9d" name="Total Invested" />
              </LineChart>
            </div>
            <div className='compound_calculater_selectbox_main'>
              <div>
                <select value={lengthOfTime} onChange={(e) => setLengthOfTime(e.target.value)}>
                  {lengthOfTimeOptions.map((years) => (
                    <option key={years} value={years}>
                      {years} years
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select value={interestRate} onChange={(e) => setInterestRate(e.target.value)}>
                  {interestRateOptions.map((rate) => (
                    <option key={rate} value={rate}>{rate}%</option>
                  ))}
                </select>
              </div>
              <div>
                <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(e.target.value)}>
                  <option value="annually">Annually</option>
                  <option value="semi-annually">Semi-annually</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="daily">Daily</option>
                </select>
              </div>
            </div>
          </form>
        </div>

      </div>
      <div className='home_circle_image'>
        <img src={circle} alt="circle_image_not_found" />
        <div className='home_circle_image_heading'>
          <h3>WHERE CAN I INVEST?</h3>
          <h1>YOUR CHOICE</h1>
        </div>
      </div>
      <div className='home_circle_content_onresponsive_main'>
        <div className='home_circle_content_onresponsive_heading'>
          <h3>WHERE CAN I INVEST?</h3>
          <h1>YOUR CHOICE</h1>
        </div>
        <div className='home_circle_content_onresponsive_container_one'>
          <h3>Residential</h3>
          <img src={apartment} alt="" />
        </div>
        <div className='home_circle_content_onresponsive_container_two'>
          <h3>Commercial</h3>
          <img src={building} alt="" />
        </div>
        <div className='home_circle_content_onresponsive_container_three'>
          <h3>Rental Focused BnB’s</h3>
          <img src={plotting} alt="" />
        </div>
        <div className='home_circle_content_onresponsive_container_four'>
          <h3>Plots</h3>
          <img src={villa} alt="" />
        </div>
      </div>
      {/* 
            <div className="bottom-half-circle " style={BottomHalfCircle}>
                
            </div> */}

      <div className='home_live_property_heading'>
        <h1>LIVE PROPERTIES</h1>
      </div>
      <div className="property_card">
        {listings
          .filter(
            (listing) => listing.islive === 1
          )
          .map((listing) => (
            <Grid
            // key={listing._id}
            // item
            // xs={1}
            // sm={4}
            // md={4}
            // sx={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            >
              <Link
                to={
                  isLoggedIn
                    ? `/dashboard/properties/view/${listing._id}`
                    : ``
                }
                style={{ textDecoration: "none" }}
              >

                <Property sx={{ maxWidth: 365 }}>
                  <CardActionArea>
                    <CardMedia>

                      <Carousel
                        showThumbs={false}
                        statusFormatter={() => {
                          return "";
                        }}
                      >
                        {listing.images.map((image, index) => (
                          <div
                            key={index}
                            style={{
                              height: "100px",
                            }}
                          >
                            <img
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              src={image}
                              alt={`image-${index}`}
                            />

                            {listing.islive == 1 && (
                              <SubheaderFixed>
                                <Box
                                  sx={{
                                    backgroundColor: "#56C29C",
                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "5px 10px",
                                  }}
                                >
                                  Live
                                </Box>
                                <Box
                                  sx={{
                                    backgroundColor: "white",
                                    fontFamily: "Inter",
                                    color: "black",
                                    borderRadius: "5px",
                                    padding: "5px",
                                  }}
                                >
                                  Reduced Pricing
                                </Box>
                              </SubheaderFixed>
                            )}


                            <FixedBox>
                              {listing.properyheading.includes("Plot")
                                ? "Plot"
                                : "Luxury Property"}
                            </FixedBox>
                          </div>
                        ))}
                      </Carousel>
                    </CardMedia>
                    <Subheader sx={{ display: "flex", justifyContent: "space-around" }} >
                      <Box style={{ marginLeft: "-8px", fontSize: "9px", height: "fit-content" }}>
                        {listing.propertydescription.split(" | ")[0]}
                      </Box>
                      <Box style={{ marginLeft: "20px", fontSize: "9px", height: "fit-content" }}>
                        {listing.propertydescription.split(" | ")[1]}
                      </Box>
                      <Box style={{ marginLeft: "20px", fontSize: "9px", height: "fit-content" }}>
                        {listing.propertydescription.split(" | ")[2]}
                      </Box>
                    </Subheader>

                    <Header gutterBottom variant="p" sx={{ textAlign: "start" }} component="div">
                      {listing.properyheading}
                    </Header>
                    {isLoggedIn && (
                      <CardContent
                        sx={{
                          marginTop: "0px",
                          paddingTop: "2px",
                        }}
                      >
                        <PriceBox>
                          <Box
                            style={{
                              color: "#0170dc",
                              fontSize: "18px",
                              fontWeight: 600,
                              fontFamily: "Inter",
                            }}
                          >
                            RUP {listing.propertyprice}
                          </Box>
                        </PriceBox>


                        <ReturnsBox>
                          <Box sx={{ fontSize: "0.8rem" }} >
                            <Typography noWrap sx={{ fontSize: "0.8rem" }} >Funding Date</Typography>
                            <Box
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "0.8rem"
                              }}
                            >
                              {listing.fundingdate}
                            </Box>
                          </Box>
                          <Box>
                            <Typography noWrap sx={{ fontSize: "0.8rem" }} >Min. Investment</Typography>
                            <Box
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "0.8rem"
                              }}
                            >
                              {listing.mininvestment}
                            </Box>
                          </Box>


                        </ReturnsBox>
                      </CardContent>
                    )}
                    {!isLoggedIn && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "90%",
                            backgroundColor: "#eee15",
                            display: "flex",
                            flexDirection: "column",
                            height: "100px",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            to="/login"
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            <div
                              style={{
                                padding: "10px",
                                borderRadius: "10px",
                                display: "flex",
                                flexDirection: "column",
                                backgroundImage: "images/blurimg.png",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  marginTop: "5%",
                                }}
                              >
                                <img
                                  src="images/lock.png"
                                  alt="lock"
                                  height={30}
                                  width={30}
                                />
                              </div>

                              <div
                                style={{
                                  marginTop: "10px",
                                }}
                              >
                                <Link
                                  to="/login"
                                  style={{
                                    textDecoration: "none",
                                    color: "#41CE8E",
                                    fontWeight: "600",
                                  }}
                                >
                                  Signup
                                </Link>{" "}
                                or{" "}
                                <Link
                                  to="/login"
                                  style={{
                                    textDecoration: "none",
                                    color: "#41CE8E",
                                    fontWeight: "600",
                                  }}
                                >
                                  Login
                                </Link>{" "}
                                to view the property
                              </div>
                            </div>
                          </Link>

                          <div></div>
                        </div>
                      </div>
                    )}
                  </CardActionArea>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      marginBottom: "15px",
                    }}
                  >
                    {isLoggedIn && listing.islive == 1 && (
                      <Button
                        sx={{
                          paddingLeft: "65px",
                          paddingRight: "65px",
                          backgroundColor: "#0170dc",
                          color: "white",
                        }}
                      >
                        Invest
                      </Button>
                    )}
                    {isLoggedIn && listing.islive == 2 && (
                      <Button
                        sx={{
                          paddingLeft: "65px",
                          paddingRight: "65px",
                          backgroundColor: "#0170dc",
                          color: "white",
                        }}
                      >
                        I'm Interested
                      </Button>
                    )}
                  </div>
                </Property>
              </Link>
            </Grid>
          ))}
      </div>

    </div>
  );
};

export default InterestGraph;


