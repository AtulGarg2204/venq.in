import React, { useState } from 'react'
import "./Amenities.css"


//   const [amenities,setAmenities]=useState({
  //       firstAmenitie:"",
  //       secondAmenitie:"",
  //       thirdAmenitie:"",
  //       fourthAmenitie:"",
  //       fifthAmenitie:""
  //   })

  //   const handleChange=(event)=>{
  //       const {name,value}=event.target;
  //       setAmenities(prev=>({
  //           ...prev,
  //           [name]:value
  //       }))

        
  //   }
  //   const handleSubmit=()=>{
  //       axios.post('/api/upload-amenitie', amenities)
  //       .then(response => {
  //         console.log(response.data);  
  //       })
  //       .catch(error => {
  //         console.error('Error uploading amenitie:', error);
  //       });
  //       setAmenities({
  //           firstAmenitie:"",
  //           secondAmenitie:"",
  //           thirdAmenitie:"",
  //           fourthAmenitie:"",
  //           fifthAmenitie:""
  //       });
  //   }
  // return (
  //   <div className='amenities_Container'>
  //       <h5>Amenities</h5>
  //       <input 
  //       placeholder='Enter Frist Amenities' 
  //       type="text" 
  //       name="firstAmenitie"
  //       value={amenities.firstAmenitie}
  //       onChange={handleChange}
  //       />
  //       <input 
  //       placeholder='Enter second Amenities'
  //       type="text" 
  //       name='secondAmenitie'
  //       value={amenities.secondAmenitie}
  //       onChange={handleChange}
  //       />
  //       <input 
  //       placeholder='Enter third Amenities' 
  //       type="text" 
  //       name='thirdAmenitie'
  //       value={amenities.thirdAmenitie}
  //       onChange={handleChange}
  //       />
  //       <input 
  //       placeholder='Enter fourth Amenities' 
  //       type="text" 
  //       name='fourthAmenitie'
  //       value={amenities.fourthAmenitie}
  //       onChange={handleChange}
  //       />
  //       <input 
  //       placeholder='Enter fifth Amenities' 
  //       type="text" 
  //       name='fifthAmenitie'
  //       value={amenities.fifthAmenitie}
  //       onChange={handleChange}
  //       />
  //       <br/>
  //       <button onClick={handleSubmit}>Add</button>
  //   </div>
  // )

  // const handleSsubmit = () => {
    //   const selectedItems = items.filter(item => item.checked);
      
    //   axios.post('/api/submit-data', selectedItems)
    //     .then(response => {
    //       console.log(response.data); 
    //     })
    //     .catch(error => {
    //       console.error('Error sending form data:', error);
    //     });

    //     console.log(selectedItems)
    //     setItems(prevItems =>
    //       prevItems.map(item => ({ ...item, checked: false }))
    //     );
    // };






// const Amenities = ({fd,sfd}) => {

  

//     const [items, setItems] = useState([
//       { id: 1, name: 'Multiple Clubhouses', imageURL: 'https://i.postimg.cc/xCFhpJRT/club.png' },
//       { id: 2, name: 'Swimming Pool', imageURL: 'https://i.postimg.cc/kgFFw2Fr/swimming-pool.png' },
//       { id: 3, name: 'Multipurpose Halls', imageURL: 'https://i.postimg.cc/TPmYjxqs/hall.png' },
//       { id: 4, name: 'Pet-friendly Park', imageURL: 'https://i.postimg.cc/jjrQ4xYw/park.png' },
//       { id: 5, name: 'Basketball Court', imageURL: 'https://i.postimg.cc/85PQPD3r/basketball-hoop.png' },
//       { id: 6, name: 'Community Gardens', imageURL: 'https://i.postimg.cc/Lsh8Jfnm/gardening.png' },
//       { id: 7, name: 'Jogging Tracks', imageURL: 'https://i.postimg.cc/qR94F5JF/running.png' },
//       { id: 8, name: 'Mini Theatre', imageURL: 'https://i.postimg.cc/65QyFyXJ/theatre.png' },
//       { id: 9, name: 'Fitness Centre', imageURL: 'https://i.postimg.cc/FKGttsv8/weights.png' },
//       { id: 10, name: 'Tennis Court', imageURL: 'https://i.postimg.cc/sXKNLnYr/tennis-court.png' },
//       { id: 11, name: 'Badminton Court', imageURL: 'https://i.postimg.cc/GhLJmkW4/badminton-court.png' },
//       { id: 12, name: 'Theme Gardens', imageURL: 'https://i.postimg.cc/gjQYQyRg/flowers.png' },
//       { id: 13, name: 'Oxygen Parks', imageURL: 'https://i.postimg.cc/QtcwhpR6/farm.png' },
//       { id: 14, name: 'Multi-Cuisine Restaurant', imageURL: 'https://i.postimg.cc/R0Yn1YVY/restaurant.png' },
//       { id: 15, name: 'Reflexology Park', imageURL: 'https://i.postimg.cc/fLZQPzLS/healthy.png' },
//     ]);


   
//     const handleCheckboxChange = (checked, amenityName, imageURL) => {
//       if (checked) {
//         // Add the selected amenity to the amenities array in formData
//         sfd(prevFormData => ({
//           ...prevFormData,
//           amenities: [
//             ...prevFormData.amenities,
//             { name: amenityName, imageURL: imageURL }
//           ]
//         }));
//       } else {
//         // Remove the unselected amenity from the amenities array in formData
//         sfd(prevFormData => ({
//           ...prevFormData,
//           amenities: prevFormData.amenities.filter(amenity => amenity.name !== amenityName)
//         }));
//       }
//     };

    

// return(
    


//     <div className="maincontainer">
//       <h2>Choose Amenities</h2>
//       {items.map((amenity, index) => (
//         <div key={index}>
//           <label>
//             <input
//               type="checkbox"
//               checked={fd.amenities.some(item => item.name === amenity.name)}
//               onChange={(e) => handleCheckboxChange(e.target.checked, amenity.name, amenity.imageURL)}
//             />
//             {amenity.name}
//           </label>
//         </div>
//       ))}
//     </div>
// )
// }

// export default Amenities








// <div className='amenities_main'>
    //   <form>
    //     {items.map(item => (
    //       <div className='amenities_container' key={item.id}>
    //         <label>
    //           <input type="checkbox" checked={item.checked || false} onChange={() => handleCheckboxChange(item.id)} />
    //           {item.name}
    //         </label>
    //       </div>
    //     ))}
        
    //   </form>
    // </div> 













 // const handleCheckboxChange = (itemId) => {
    //   // setItems(prevItems =>
    //   //   prevItems.map(item =>
    //   //     item.id === itemId ? { ...item, checked: !item.checked } : item
    //   //   )
    //   // );
    // };





// function Amenities ({fd,sfd}) {
  
//   return (
//     <div className="amenities_main">
      
//       <input
//         type="text"
//         placeholder="Multiple Clubhouses"
//         value={fd.amenitiesMultipleClubhouses}
//         onChange={(event) =>
//           sfd({ ...fd, amenitiesMultipleClubhouses: event.target.value })
//         }
//       />

// <input
//         type="text"
//         placeholder="Swimming Pool"
//         value={fd.amenitiesSwimmingPool}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesSwimmingPool: e.target.value });
//         }}
//       />

// <input
//         type="text"
//         placeholder="Multipurpose Halls"
//         value={fd.amenitiesMultipurposeHalls}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesMultipurposeHalls: e.target.value });
//         }}
//       />

// <input
//         type="text"
//         placeholder="Pet friendly Park"
//         value={fd.amenitiesPetFriendlyPark}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesPetFriendlyPark: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Basketball Court"
//         value={fd.amenitiesBasketballCourt}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesBasketballCourt: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Community Gardens"
//         value={fd.amenitiesCommunityGardens}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesCommunityGardens: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Jogging Tracks"
//         value={fd.amenitiesJoggingTracks}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesJoggingTracks: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Mini Theatre"
//         value={fd.amenitiesMiniTheatre}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesMiniTheatre: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Fitness Centre"
//         value={fd.amenitiesFitnessCentre}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesFitnessCentre: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Tennis Court"
//         value={fd.amenitiesTennisCourt}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesTennisCourt: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Badminton Court"
//         value={fd.amenitiesBadmintonCourt}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesBadmintonCourt: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Theme Gardens"
//         value={fd.amenitiesThemeGardens}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesThemeGardens: e.target.value });
//         }}
//       />

//         <input
//         type="text"
//         placeholder="Oxygen Parks"
//         value={fd.amenitiesOxygenParks}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesOxygenParks: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Multi Cuisine Restaurant"
//         value={fd.amenitiesMultiCuisineRestaurant}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesMultiCuisineRestaurant: e.target.value });
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Reflexology Park"
//         value={fd.amenitiesReflexologyPark}
//         onChange={(e) => {
//           sfd({ ...fd, amenitiesReflexologyPark: e.target.value });
//         }}
//       />

//     </div>
//   );
// };



const Amenities = ({ fd, sfd }) => {
  
  const [items, setItems] = useState([
    { id: 1, name: 'Multiple Clubhouses', imageURL: 'https://i.postimg.cc/xCFhpJRT/club.png', checked: false },
    { id: 2, name: 'Swimming Pool', imageURL: 'https://i.postimg.cc/kgFFw2Fr/swimming-pool.png', checked: false },
    { id: 3, name: 'Multipurpose Halls', imageURL: 'https://i.postimg.cc/TPmYjxqs/hall.png', checked: false },
    { id: 4, name: 'Pet-friendly Park', imageURL: 'https://i.postimg.cc/jjrQ4xYw/park.png', checked: false },
    { id: 5, name: 'Basketball Court', imageURL: 'https://i.postimg.cc/85PQPD3r/basketball-hoop.png', checked: false },
    { id: 6, name: 'Community Gardens', imageURL: 'https://i.postimg.cc/Lsh8Jfnm/gardening.png', checked: false },
    { id: 7, name: 'Jogging Tracks', imageURL: 'https://i.postimg.cc/qR94F5JF/running.png', checked: false },
    { id: 8, name: 'Mini Theatre', imageURL: 'https://i.postimg.cc/65QyFyXJ/theatre.png', checked: false },
    { id: 9, name: 'Fitness Centre', imageURL: 'https://i.postimg.cc/FKGttsv8/weights.png', checked: false },
    { id: 10, name: 'Tennis Court', imageURL: 'https://i.postimg.cc/sXKNLnYr/tennis-court.png', checked: false },
    { id: 11, name: 'Badminton Court', imageURL: 'https://i.postimg.cc/GhLJmkW4/badminton-court.png', checked: false },
    { id: 12, name: 'Theme Gardens', imageURL: 'https://i.postimg.cc/gjQYQyRg/flowers.png', checked: false },
    { id: 13, name: 'Oxygen Parks', imageURL: 'https://i.postimg.cc/QtcwhpR6/farm.png', checked: false },
    { id: 14, name: 'Multi-Cuisine Restaurant', imageURL: 'https://i.postimg.cc/R0Yn1YVY/restaurant.png', checked: false },
    { id: 15, name: 'Reflexology Park', imageURL: 'https://i.postimg.cc/fLZQPzLS/healthy.png', checked: false },
  ]);

  const handleCheckboxChange = (checked, amenityName, imageURL) => {
    if (checked) {
      // Add the selected amenity to the amenities array in formData
      sfd(prevFormData => ({
        ...prevFormData,
        amenities: [
          ...prevFormData.amenities,
          { name: amenityName, imageURL: imageURL }
        ]
      }));
    } else {
      // Remove the unselected amenity from the amenities array in formData
      sfd(prevFormData => ({
        ...prevFormData,
        amenities: prevFormData.amenities.filter(amenity => amenity.name !== amenityName)
      }));
    }
  };
 

  return (
    <div className='amenities_main'>
      <form>
      {items.map((amenity, index) => (
        <div className='amenities_container' key={index}>
          <label>
            <input
              type="checkbox"
              checked={fd.amenities.some(item => item.name === amenity.name)}
              onChange={(e) => handleCheckboxChange(e.target.checked, amenity.name, amenity.imageURL)}
            />
            {amenity.name}
          </label>
        </div>
      ))}
      </form>
    </div>
  );
};


//className='amenities_container'
export default Amenities;