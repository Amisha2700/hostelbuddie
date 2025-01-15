// import React, { useState } from 'react';
// import './Forms.css';
// import axios from "axios"
// const Found = () => {
//   const [formData, setFormData] = useState({
//     itemName: '',
//     itemDescription: '',
//     contactInfo: '',
//     itemImage: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       itemImage: e.target.files[0],
//     });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log('Found Form Submitted', formData);
//     try {
//       const data = new FormData();
//       data.append('itemName', formData.itemName);
//       data.append('itemDescription', formData.itemDescription);
//       data.append('contactInformation', formData.contactInfo);
//       data.append('picturepath', formData.itemImage);
//       const email = localStorage.getItem('emailid');
//       data.append('emailid', email);
//       const config = {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${localStorage.getItem('generatetoken')}`, // Include a token if your `verify` middleware requires authentication
//         },
//       };

//       const response = await axios.post(
//         'http://localhost:4200/posts/lost-found/newLostPosts',
//         data,
//         config
//       );

//       console.log('Post created successfully:', response.data);
//     // Reset form fields
//     setFormData({
//       itemName: '',
//       itemDescription: '',
//       contactInfo: '',
//       itemImage: null,
//     });
//   }catch(error){
//     console.error('Error creating post:', error.response ? error.response.data : error.message);
//   }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h1 className="title">📢 Found Item Portal</h1>
//         <p className="subtitle">Post details about items you've found to help locate their owner!</p>
//         <form onSubmit={handleSubmit} className="form">
//           <div className="form-group">
//             <label htmlFor="itemName" className="label">Item Name:</label>
//             <input
//               type="text"
//               id="itemName"
//               name="itemName"
//               value={formData.itemName}
//               onChange={handleChange}
//               required
//               className="input"
//               placeholder="Enter the name of the found item"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="itemDescription" className="label">Item Description:</label>
//             <textarea
//               id="itemDescription"
//               name="itemDescription"
//               value={formData.itemDescription}
//               onChange={handleChange}
//               rows="4"
//               required
//               className="textarea"
//               placeholder="Describe the found item"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="contactInfo" className="label">Your Contact Info:</label>
//             <input
//               type="text"
//               id="contactInfo"
//               name="contactInfo"
//               value={formData.contactInfo}
//               onChange={handleChange}
//               required
//               className="input"
//               placeholder="Enter your email or phone number"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="itemImage" className="label">Upload Item Image:</label>
//             <input
//               type="file"
//               id="itemImage"
//               name="itemImage"
//               onChange={handleFileChange}
//               className="file-input"
//             />
//           </div>

//           <button type="submit" className="button">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Found;
import React, { useState } from 'react';
import './Forms.css';
import Swal from 'sweetalert2';
import axios from 'axios';
const Found = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemDescription: '',
    contactInfo: '',
    itemImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      itemImage: e.target.files[0],
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Found Form Submitted', formData);

    Swal.fire({
                      icon: 'success',
                      title: 'Form submitted',
                      text: 'Kindly go back to the home page and check the post.',
                      confirmBUttonText: 'OK',
              }); 
    

    try {
      const data = new FormData();
      data.append('itemName', formData.itemName);
      data.append('itemDescription', formData.itemDescription);
      data.append('contactInformation', formData.contactInfo);
      data.append('picturepath', formData.itemImage);
      const email = localStorage.getItem('emailid');
      data.append('emailid', email);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('generatetoken')}`, // Include a token if your `verify` middleware requires authentication
        },
      };

      const response = await axios.post(
        'http://localhost:4200/posts/lost-found/newFoundPosts',
        data,
        config
      );

      console.log('Post created successfully:', response.data);

    // Reset form fields
    setFormData({
      itemName: '',
      itemDescription: '',
      contactInfo: '',
      itemImage: null,
    });
  }catch(error){
    console.error('Error creating post:', error.response ? error.response.data : error.message);
  }
  };

    return (
    <div className="container">
      <div className="card">
        <h1 className="title">📢 Found Item Portal</h1>
        <p className="subtitle">Post details about items you've found to help locate their owner!</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="itemName" className="label">Item Name:</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter the name of the found item"
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemDescription" className="label">Item Description:</label>
            <textarea
              id="itemDescription"
              name="itemDescription"
              value={formData.itemDescription}
              onChange={handleChange}
              rows="4"
              required
              className="textarea"
              placeholder="Describe the found item"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactInfo" className="label">Your Contact Info:</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter your email or phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemImage" className="label">Upload Item Image:</label>
            <input
              type="file"
              id="itemImage"
              name="itemImage"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Found;
