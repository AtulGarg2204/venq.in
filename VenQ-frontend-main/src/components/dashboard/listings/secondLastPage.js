// import React, { Component } from 'react';
// import { Dialog } from '@mui/material';
// import {AppBar} from '@mui/material';
// import { ThemeProvider as MuiThemeProvider } from '@mui/system';
// import {TextField} from '@mui/material';
// import {Button} from '@mui/material';
// import {Box} from '@mui/material';

// export class SecondLastPage extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };

//   render() {
//     let mainArray=[];
//     const { values, handleChange } = this.props;
//     const addfunding=()=>{
//       if(values.formdata.fundingimage !== "" && values.formdata.fundingtitle!="" && values.formdata.fundingsubtitle!=""){
//           const inputDATA={
//             fundingimage:values.formdata.fundingimage,
//             fundingtitle:values.formdata.fundingtitle,
//             fundingsubtitle:values.formdata.fundingsubtitle
//           }
//            mainArray.push(inputDATA);
//            values.formdata.fundingimage="";
//            values.formdata.fundingtitle="";
//            values.formdata.fundingsubtitle="";
           
//            return;
//           }
//           alert("Empty Field")
//          }

//     return (
//       <MuiThemeProvider>
//         <>
//           <Dialog
//             open
//             fullWidth
//             maxWidth='sm'
//           >
//             <Box sx={{
//             border:'2px solid black',
//             marginTop:'3%'
//           }}>
//             <TextField
//                 label="Funding title"
//                 id="outlined-multiline-static"
//                 placeholder="Enter title of the funding"
//                 type="text"
//                 value={values.formdata.fundingtitle}
     
//                 onChange={handleChange('fundingtitle')}
//                 fullWidth
//                 multiline
//                 maxRows={5}
//                 required
//               />
//             <br />
//             <TextField
//                 label="funding title"
//                 id="outlined-multiline-static"
//                 placeholder="Enter title of the funding"
//                 type="text"
//                 value={values.formdata.fundingsubtitle}
     
//                 onChange={handleChange('fundingsubtitle')}
//                 fullWidth
//                 multiline
//                 maxRows={5}
//                 required
//               />
//                <br />
//                <TextField
//                 label="Funding description"
//                 id="outlined-multiline-static"
//                 placeholder="Enter des of the funding"
//                 type="text"
//                 value={values.formdata.fundingdescription}
     
//                 onChange={handleChange('fundingtitle')}
//                 fullWidth
//                 multiline
//                 maxRows={5}
//                 required
//               />
//               <br />

//               <Button sx={{
//               marginLeft:'50%',
//               backgroundColor:'ButtonHighlight'
//               }} onClick={addfunding}>
//                 add 
//               </Button>


//           </Box>
//           <TextField
//                 label="Location link"
//                 placeholder="Enter Location link"
//                 type="text"
//                 value={values.locationlink}
//                 //array
//                 onChange={handleChange('locationlink')}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Location description"
//                 placeholder="Enter Location Description"
//                 type="text"
//                 //array
//                 value={values.locationdescription}
               
//                 onChange={handleChange('locationdescription')}
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
// export default SecondLastPage;

import React from "react";

function SecondLastPage({ fd, sfd ,fo,sfo}) {
  // console.log(fo);
  const addfundt=()=>{
    if(fd.fundingtitle!="" && fd.fundingsubtitle!="" && fd.fundingdescription!=""){
        const newspec={
          fundingtitle:fd.fundingtitle,
          fundingsubtitle:fd.fundingsubtitle,
          fundingdescription:fd.fundingdescription
        }
        // console.log(newspec);
         fd.fundingtitle="";
         fd.fundingsubtitle="";
         fd.fundingdescription="";
         fo.push(newspec);
         sfo(fo);
        //  console.log(fo);
         return;
        }
        alert("Empty Field")
       }
  return (
    <div className="other-info-container">
       <div style={{
        border:'2px solid black'
      }}>
         <input
        type="text"
        placeholder="fundingtitle..."
        value={fd.fundingtitle}
        onChange={(e) => {
          sfd({ ...fd, fundingtitle: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="fundingsubtitle..."
        value={fd.fundingsubtitle}
        onChange={(e) => {
          sfd({ ...fd, fundingsubtitle: e.target.value });
        }}
        />
      <input
        type="text"
        placeholder="fundingdescription..."
        value={fd.fundingdescription}
        onChange={(e) => {
          sfd({ ...fd, fundingdescription: e.target.value });
        }}
        />
        <button onClick={addfundt}>add</button>

      </div>
      <input
        type="text"
        placeholder="locationlink..."
        value={fd.locationlink}
        onChange={(e) => {
          sfd({ ...fd, locationlink: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="locationdescription..."
        value={fd.locationdescription}
        onChange={(e) => {
          sfd({ ...fd, locationdescription: e.target.value });
        }}
      />
    </div>
  );
}

export default SecondLastPage;
