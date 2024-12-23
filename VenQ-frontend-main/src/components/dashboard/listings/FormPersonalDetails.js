import PhotoUploader from './PhotoUploader';

// export class FormPersonalDetails extends Component {
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
//     const { values, handleChange,handleLogoPhotos } = this.props;
//     // const addUserName = () => {
//     //   if(newspec !== ""){
//     //    mainArray.push(newspec);
//     //    // or using spread operator
//     //    // mainArray = [...mainArray, newspec];
//     //    setnewspec("")
//     //    return;
//     //   }
//     //   alert("Empty Field")
//     //  }

//     const addspecs=()=>{
//       if(fd.specsimage !== "" && fd.specstitle!="" && fd.specssubtitle!=""){
//           const newspec={
//             specsimage:fd.specsimage,
//             specstitle:fd.specstitle,
//             specssubtitle:fd.specssubtitle
//           }
//            mainArray.push(newspec);
//            fd.specsimage="";
//            fd.specstitle="";
//            fd.specssubtitle="";
           
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
//             <TextField
//                 label="Propery Heading"
//                 placeholder="Enter heading of the property"
//                 type="text"
//                 value={fd.propertyheading}
//                 onChange={handleChange('propertyheading')}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Property description"
//                 placeholder="Enter description of the property"
//                 type="text"
//                 value={fd.properetydescription}
//                 onChange={handleChange('properetydescription')}
//                 fullWidth
//                 required
//               />

//           <Box sx={{
//             border:'2px solid black',
//             marginTop:'3%'
//           }}>
//           <div className="border-0 mt-4 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
//                             <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 text-xl sm:text-2xl lg:text-3xl">
//                               Specs logo link
//                             </div>
//                             <PhotoUploader addedPhotos={fd.specsimage} onChange={handleLogoPhotos} />
//                           </div>
//             <br />
//             <TextField
//                 label="Specs title"
//                 id="outlined-multiline-static"
//                 placeholder="Enter title of the specs"
//                 type="text"
//                 value={fd.specstitle}
     
//                 onChange={handleChange('specstitle')}
//                 fullWidth
//                 multiline
//                 maxRows={5}
//                 required
//               />
//                <br />
//                <TextField
//                 label="Specs subtitle"
//                 id="outlined-multiline-static"
//                 placeholder="Enter subtitle of the specs"
//                 type="text"
//                 value={fd.specssubtitle}
     
//                 onChange={handleChange('specstitle')}
//                 fullWidth
//                 multiline
//                 maxRows={5}
//                 required
//               />
//               <br />

//               <Button sx={{
//               marginLeft:'50%',
//               backgroundColor:'ButtonHighlight'
//               }} onClick={addspecs}>
//                 add 
//               </Button>


//           </Box>

                 
               
//             {/* <TextField
//               placeholder="Enter Your Bio"
//               label="Bio"
//               onChange={handleChange('bio')}
//               defaultValue={bio}
//               margin="normal"
//               fullWidth
//             />
//             <br /> */}

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

// export default FormPersonalDetails;

import React from "react";
import "./FormPersonalDetails.css"
function FormPersonalDetails({ fd, sfd ,spi,sp ,fsp,sfsp }) {
  //  console.log(fd.specs);
  
  // const addspec=()=>{
  //         if(sp.length != 0 && fd.specstitle!="" && fd.specssubtitle!=""){
  //             const newspec={
  //               specsimage:sp,
  //               specstitle:fd.specstitle,
  //               specssubtitle:fd.specssubtitle
  //             }
  //             //  console.log(newspec);
  //              sp=[];
  //              fd.specstitle="";
  //              fd.specssubtitle="";
  //              fsp.push(newspec);
  //              sfsp(fsp);
  //             //  console.log(newspec);
  //              return;
  //             }
              
  //            }
  return (
    <div className="personal-info-container">
      
        <h5>Heading</h5>
        <input
        type="text"
        placeholder="Enter Property heading..."
        value={fd.propertyHighlightHeading}
        onChange={(e) => {
          sfd({ ...fd, propertyHighlightHeading: e.target.value });
        }}
      />
      <h5>Description</h5>
      <input
        type="text"
        placeholder="Enter Property description..."
        value={fd.propertyHighlightDescription}
        onChange={(e) => {
          sfd({ ...fd, propertyHighlightDescription: e.target.value });
        }}
      />

{/* <PhotoUploader addedPhotos={sp}  onChange={spi}/> */}
        <h5>Title</h5>
         <input
        type="text"
        placeholder="Enter title..."
        value={fd.propertyHighlightTitle}
        onChange={(e) => {
          sfd({ ...fd, propertyHighlightTitle: e.target.value });
        }}
      />
      <h5>SubTitle</h5>
      <input
        type="text"
        placeholder="Enter Subtitle..."
        value={fd.propertyHighlightSubTitle}
        onChange={(e) => {
          sfd({ ...fd, propertyHighlightSubTitle: e.target.value });
        }}
        />
        <br/>
        

      
    </div>
  );
}

export default FormPersonalDetails;