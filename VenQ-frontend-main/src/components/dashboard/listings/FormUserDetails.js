// import React, { Component } from 'react';
// import { Dialog } from '@mui/material';
// import {AppBar} from '@mui/material';
// import { ThemeProvider as MuiThemeProvider } from '@mui/system';
// import {TextField} from '@mui/material';
// import {Button} from '@mui/material';
import PhotoUploader from './PhotoUploader';
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




import React from "react";
import './FirstPage.css'
function FormUserDetails({ fd, sfd ,si,i}) {
  // console.log(i);
  return (
    <div className="maincontainer">
      <PhotoUploader addedPhotos={i}  onChange={si}/>
      <input
        type="text"
        placeholder="Enter tourlink..."
        value={fd.tourlink}
        onChange={(event) =>
          sfd({ ...fd, tourlink: event.target.value })
        }
      />
    </div>
  );
}

export default FormUserDetails;

