import React from "react";
import './FirstPage.css'

// import React, { Component } from 'react';
// import { Dialog } from '@mui/material';
// import {AppBar} from '@mui/material';
// import { ThemeProvider as MuiThemeProvider } from '@mui/system';
// import {TextField} from '@mui/material';
// import {Button} from '@mui/material';
// import PhotoUploader from './PhotoUploader';
// export class FormUserDetails extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };
  
//   render() {
//     const { values, handleChange, } = this.props;
//    console.log(values.tourlink)
//     return (
//       <MuiThemeProvider>
//         <>
//           <Dialog
//             open
//             fullWidth
//             maxWidth='sm'
//           >
//             <div className="border-0 mt-4 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
//                             <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 text-xl sm:text-2xl lg:text-3xl">
//                               Photos
//                             </div>
//                             <PhotoUploader addedPhotos={values.photos} onChange={handleChange('photos')} />
//                           </div>
//             <br />
//             <TextField
//               placeholder="Paste the link of virtual tour"
//               label="Virtual Tour Link"
//               onChange={handleChange('tourlink')}
//                 value={values.tourlink}
//               margin="normal"
//               fullWidth
//             />
//             <br />
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

// export default FormUserDetails;


{/* <FormUserDetails
            formData={formData.propertyDetails}
            onInputChange={(fieldName, value) => handleInputChange('propertyDetails', fieldName, value)}
          /> */}




function FormUserDetails({  formData, onInputChange , fd, sfd ,si,i}) {
  
  return (
    <div className="maincontainer">
      <h5>Property Name</h5>

      <input
        type="text"
        placeholder="Enter Proterty Name..."
        value={fd.propertyName}
        onChange={(event) =>
          sfd({ ...fd, propertyName: event.target.value })
        }/>

      <h5>Ticker Code</h5>
      <input
        type="text"
        placeholder="Enter Ticker Code"
        value={fd.tickerCode}
        onChange={(event) =>
          sfd({ ...fd, tickerCode: event.target.value })
        }/>

      <h5>Keypoints</h5>
      <input
        type="text"
        placeholder="Enter Keypoints..."
        value={fd.keyPoints}
        onChange={(event) =>
          sfd({ ...fd, keyPoints: event.target.value })
        }/>

      <h5>Highlights</h5>
      <input
        type="text"
        placeholder="Enter Highlight..."
        value={fd.highlightOne}
        onChange={(event) =>
          sfd({ ...fd, highlightOne: event.target.value })
        }/>

        <input
        type="text"
        placeholder="Enter Highlight..."
        value={fd.highlightTwo}
        onChange={(event) =>
          sfd({ ...fd, highlightTwo: event.target.value })
        }/>
        <br/>
        


      {/* <PhotoUploader addedPhotos={i}  onChange={si}/>
      <input
        type="text"
        placeholder="Enter tourlink..."
        value={fd.tourlink}
        onChange={(event) =>
          sfd({ ...fd, tourlink: event.target.value })
        }
      /> */}
    </div>
  );
}

export default FormUserDetails;

















// function FormUserDetails({fd,sfd}){
  
//   // const { propertyName,propertyTickerCode,keyPoints,highLightOne, highLightTwo} = fd;
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Proterty Name..."
//         value={fd.propertyName}
//         onChange={(e) => {
//           onI({ ...fd, propertyName: e.target.value })
//         }}
//       />
//       {/* Add other input fields for property details */}
//       {/* <input
//         type="text"
//         placeholder="Enter Ticker Code"
//         value={propertyTickerCode || ''}
//         onChange={(e) => onInputChange({...formData,"propertyTickerCode": e.target.value})}

//         // onChange={(e) => onInputChange('propertyTickerCode', e.target.value)}
//       /> */}

//       {/* <input
//         type="text"
//         placeholder="Enter Keypoints..."
//         value={keyPoints || ''}
//         onChange={(e) => onInputChange({...formData,"keyPoints": e.target.value})}

//         // onChange={(e) => onInputChange('keyPoints', e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Enter Highlight..."
//         value={highLightOne || ''}
//         onChange={(e) => onInputChange({...formData,"highLightOne": e.target.value})}

//         // onChange={(e) => onInputChange('highLightOne', e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Enter Highlight..."
//         value={highLightTwo || ''}
//         onChange={(e) => onInputChange({...formData,"highLightTwo": e.target.value})}

//         // onChange={(e) => onInputChange('highLightTwo', e.target.value)}
//       /> */}

//     </div>
//   );
// }


// export default FormUserDetails;