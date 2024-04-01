// import React, { Component } from 'react';
// import { Dialog } from '@mui/material';
// import {AppBar} from '@mui/material';
// import { ThemeProvider as MuiThemeProvider } from '@mui/system';
// import {TextField} from '@mui/material';
// import {Button} from '@mui/material';

// export class FourthPage extends Component {
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
//                 label="Property Overview"
//                 placeholder="Enter overview of the property"
//                 type="text"
//                 value={values.formdata.propertyoverview}
               
//                 onChange={handleChange('propertyoverview')}
//                 fullWidth
//                 required
//               />
//                  <TextField
//                 label="Property Price"
//                 placeholder="Enter Property Price"
//                 type="text"
//                 value={values.formdata.propertyprice}
               
//                 onChange={handleChange('propertyprice')}
//                 fullWidth
//                 required
//               />
//                <TextField
//                 label="Transaction Cost"
//                 placeholder="Enter Transaction Cost"
//                 type="text"
//                 value={values.formdata.transactioncost}
               
//                 onChange={handleChange('transactioncost')}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="VENQ Fee"
//                 placeholder="Venq fee"
//                 type="text"
//                 value={values.formdata.venqfee}
//                 onChange={handleChange('venqfee')}
//                 fullWidth
//                 required
//               />
//                <TextField
//                 label="Projected Gross Rent"
//                 placeholder="Enter Projected Gross Rent"
//                 type="text"
//                 value={values.formdata.projectedgrossrent}
               
//                 onChange={handleChange('projectedgrossrent')}
//                 fullWidth
//                 required
//               />
//                <TextField
//                 label="Maintainence fee"
//                 placeholder="Enter Maintainence fee"
//                 type="text"
//                 value={values.formdata.maintainencefee}
               
//                 onChange={handleChange('maintainencefee')}
//                 fullWidth
//                 required
//               />
//                <TextField
//                 label="Service Charges"
//                 placeholder="Enter Service Charges"
//                 type="text"
//                 value={values.formdata.servicecharges}
               
//                 onChange={handleChange('servicecharges')}
//                 fullWidth
//                 required
//               />
//                <TextField
//                 label="Annual Net Income"
//                 placeholder="Enter Annual Net Income"
//                 type="text"
//                 value={values.formdata.annualnetincome}
               
//                 onChange={handleChange('annualnetincome')}
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

// export default FourthPage;
import React from "react";

function FourthPage({ fd, sfd }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="propertyoverview..."
        value={fd.propertyoverview}
        onChange={(e) => {
          sfd({ ...fd, propertyoverview: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="propertyprice..."
        value={fd.propertypricen}
        onChange={(e) => {
          sfd({ ...fd, propertypricen: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="transactioncost..."
        value={fd.transactioncost}
        onChange={(e) => {
          sfd({ ...fd, transactioncost: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="venqfee..."
        value={fd.venqfee}
        onChange={(e) => {
          sfd({ ...fd, venqfee: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="projectedgrossrent..."
        value={fd.projectedgrossrent}
        onChange={(e) => {
          sfd({ ...fd, projectedgrossrent: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="maintainencefee..."
        value={fd.maintainencefee}
        onChange={(e) => {
          sfd({ ...fd, maintainencefee: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="servicecharges..."
        value={fd.servicecharges}
        onChange={(e) => {
          sfd({ ...fd, servicecharges: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="annualnetincome..."
        value={fd.annualnetincome}
        onChange={(e) => {
          sfd({ ...fd, annualnetincome: e.target.value });
        }}
      />
    </div>
  );
}

export default FourthPage;


