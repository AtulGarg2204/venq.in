// import React, { Component } from 'react';
// import { Dialog } from '@mui/material';
// import {AppBar} from '@mui/material';
// import { ThemeProvider as MuiThemeProvider } from '@mui/system';
// import {TextField} from '@mui/material';
// import {Button} from '@mui/material';
// import {Box} from '@mui/material';
// import axios from 'axios';
import DocumentUploader from './DocumentUploader'
// export class FinalPage extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };

//   render() {
//     let amenityArray=[];
//     let docArray=[];
//     const { values, handleChange } = this.props;
//     const uploaddoc=async (e)=>{
//       e.preventDefault();
//       try {
//         const docres=await axios.post('http://localhost:4000/listing/uploaddoc');
//         if(docres){
//           console.log(docres);
//         }else{
//           console.log('gadbad hai');
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     const adddoc=()=>{
//       if(values.formdata.specsimage !== "" && values.formdata.specstitle!="" && values.formdata.specssubtitle!=""){
//           const inputDATA={
//             specsimage:values.formdata.specsimage,
//             specstitle:values.formdata.specstitle,
//             specssubtitle:values.formdata.specssubtitle
//           }
//            docArray.push(inputDATA);
//            values.formdata.specsimage="";
//            values.formdata.specstitle="";
//            values.formdata.specssubtitle="";
           
//            return;
//           }
//           alert("Empty Field")
//          }
//          const addamenity=()=>{
//           if(values.formdata.specsimage !== "" && values.formdata.specstitle!="" && values.formdata.specssubtitle!=""){
//               const inputDATA={
//                 specsimage:values.formdata.specsimage,
//                 specstitle:values.formdata.specstitle,
//                 specssubtitle:values.formdata.specssubtitle
//               }
//                amenityArray.push(inputDATA);
//                values.formdata.specsimage="";
//                values.formdata.specstitle="";
//                values.formdata.specssubtitle="";
               
//                return;
//               }
//               alert("Empty Field")
//              }
    
//     return (
//       <MuiThemeProvider>
//         <>
//           <Dialog
//             open
//             fullWidth
//             maxWidth='sm'
//           >
//           <Box sx={{
//             border:'2px solid black',
//             marginTop:'3%'
//           }}>
//           <TextField
//           //all arrays
//                 label="Amenity Name"
//                 placeholder="Enter Amenity Name"
//                 type="text"
//                 value={values.amenityname}
//                 onChange={handleChange('amenityname')}
//                 fullWidth
//                 required
//               />

//               <TextField
//                 label="Amenity Link"
//                 placeholder="Enter Amenity Link"
//                 type="text"
//                 value={values.amenitylink}
               
//                 onChange={handleChange('amenitylink')}
//                 fullWidth
//                 required
//               />

//                <Button sx={{
//               marginLeft:'50%',
//               backgroundColor:'ButtonHighlight'
//               }} onClick={addamenity}>
//                 add 
//               </Button>
//               </Box>
//               <Box sx={{
//             border:'2px solid black',
//             marginTop:'3%'
//           }}>
//                <TextField
//                 label="Document Name"
//                 placeholder="Enter Document Name"
//                 type="text"
//                 value={values.documentName}
               
//                 onChange={handleChange('documentName')}
//                 fullWidth
//                 required
//               />
//                <DocumentUploader/>
            
              
//                 <Button sx={{
//               marginLeft:'50%',
//               backgroundColor:'ButtonHighlight'
//               }} onClick={adddoc}>
//                 add 
//               </Button>
//               </Box>
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

// export default FinalPage;

import React from "react";

function FinalPage({ fd, sfd , am,sam,dc,sdc , dl,sdl }) {
  const addamenity=()=>{
    if(fd.amenityname!="" && fd.amenitylink!=""){
        const newspec={
          aname:fd.amenityname,
          alink:fd.amenitylink,
        }
        // console.log(newspec);
         fd.amenityname="";
         fd.amenitylink="";
         am.push(newspec);
         sam(am);
        //  console.log(fo);
         return;
        }
        alert("Empty Field")
       }
       const adddoc=()=>{
        if(dl!="" && fd.documentName!=""){
            const newspec={
              dname:fd.documentName,
              dlink:dl,
            }
            // console.log(newspec);
              sdl("");
             fd.documentName="";
             dc.push(newspec);
             sdc(dc);
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
        placeholder="amenityname..."
        value={fd.amenityname}
        onChange={(e) => {
          sfd({ ...fd, amenityname: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="amenitylink..."
        value={fd.amenitylink}
        onChange={(e) => {
          sfd({ ...fd, amenitylink: e.target.value });
        }}
        />
        <button onClick={addamenity}>add</button>

      </div>
      <div className="other-info-container">
       <div style={{
        border:'2px solid black'
      }}>
         <input
        type="text"
        placeholder="documentName..."
        value={fd.documentName}
        onChange={(e) => {
          sfd({ ...fd, documentName: e.target.value });
        }}
      />
      <DocumentUploader docl={dl} sdocl={sdl} />
        <button onClick={adddoc}>add</button>

      </div>
      </div>
    </div>
  );
}

export default FinalPage;
