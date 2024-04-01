// import React, { useState } from 'react';
// import Form from './dummyForm';

// const { id } = useParams(); // Access the ID from the URL params
// const [listing, setListing] = useState({});

// useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/listing/${id}`);
//         setListing(response.data);
//       } catch (error) {
//         console.error("Error fetching listing:", error);
//       }
//     };

//     fetchListing();
//   }, [id]);

// const PropertyItem = ({ listingId }) => {
//   const [isEditMode, setIsEditMode] = useState(false);

//   const handleEditClick = () => {
//     setIsEditMode(true);
//   };

//   const handleFormSubmit = () => {
//     // Handle any post-submission logic here
//     setIsEditMode(false);
//   };

//   return (
//     <div>
//       <h2>Property Details</h2>
//       {/* Display listing details */}
//       {/* ... */}

//       {/* Render Edit button when not in edit mode */}
//       {!isEditMode && <button onClick={handleEditClick}>Edit</button>}

//       {/* Render Form in edit mode */}
//       {isEditMode && (
//         <Form
//           mode="edit"
//           listingId={listingId}
//           onSubmitSuccess={handleFormSubmit}
//         />
//       )}
//     </div>
//   );
// };

// export default PropertyItem;

