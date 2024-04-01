// import React, { Component } from 'react';
// import { Dialog } from '@mui/material';
// import {AppBar} from '@mui/material';
// import { ThemeProvider as MuiThemeProvider } from '@mui/system';
// import {TextField} from '@mui/material';
// import {Button} from '@mui/material';

// export class ThirdPage extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };

//   render() {
//     const { values, handleChange } = this.props;
//     return (
//       <MuiThemeProvider>
//         <>
//           <Dialog
//             open
//             fullWidth
//             maxWidth='sm'
//           >
//            <TextField
//                 label="Property Price"
//                 placeholder="Enter price of the property"
//                 type="text"
//                 value={values.propertyprice}
               
//                 onChange={handleChange('propertyprice')}
//                 fullWidth
//                 required
//               />
//                  <TextField
//                 label="Annualized Return"
//                 placeholder="Enter Annualized Return"
//                 type="text"
//                 value={values.annualizedreturn}
               
//                 onChange={handleChange('annualizedreturn')}
//                 fullWidth
//                 required
//               />
//                <TextField
//                 label="Annual Appreciation"
//                 placeholder="Enter Annual Appreciation"
//                 type="text"
//                 value={values.annualappreciation}
               
//                 onChange={handleChange('annualappreciation')}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Gross Yield"
//                 placeholder="Enter Gross Yield"
//                 type="text"
//                 value={values.grossyield}
               
//                 onChange={handleChange('grossyield')}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Net Yield"
//                 placeholder="Enter Net Yield"
//                 type="text"
//                 value={values.netyield}
               
//                 onChange={handleChange('netyield')}
//                 fullWidth
//                 required
//               />
//             <br />

//             <Button
//               color="secondary"
//               variant="contained"
//               onClick={this.back}
//             >Back</Button>

//             <Button
//               color="primary"
//               variant="contained"
//               onClick={this.continue}
//             >Continue</Button>
//           </Dialog>
//         </>
//       </MuiThemeProvider>
//     );
//   }
// }

// export default ThirdPage;

import React from "react";

function ThirdPage({ fd, sfd }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="propertyprice..."
        value={fd.propertyprice}
        onChange={(e) => {
          sfd({ ...fd, propertyprice: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="annualizedreturn..."
        value={fd.annualizedreturn}
        onChange={(e) => {
          sfd({ ...fd, annualizedreturn: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="annualappreciation..."
        value={fd.annualappreciation}
        onChange={(e) => {
          sfd({ ...fd, annualappreciation: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="grossyield..."
        value={fd.grossyield}
        onChange={(e) => {
          sfd({ ...fd, grossyield: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="netyield..."
        value={fd.netyield}
        onChange={(e) => {
          sfd({ ...fd, netyield: e.target.value });
        }}
      />
    </div>
  );
}

export default ThirdPage;

