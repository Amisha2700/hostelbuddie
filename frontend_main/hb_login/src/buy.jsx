// import React, { useState } from 'react';
// import './Forms.css';

// const Buy = () => {
//   const [formData, setFormData] = useState({
//     itemName: '',
//     itemDescription: '',
//     contactInfo: '',
//     itemImage: null,
//     price: 0
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Buy Form Submitted', formData);

//     // Reset form fields
//     setFormData({
//       itemName: '',
//       itemDescription: '',
//       contactInfo: '',
//       itemImage: null,
//       price: 0
//     });
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h1 className="title">🛒 Buy Item Portal</h1>
//         <p className="subtitle">Find the perfect item, or post a request to buy one!</p>
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
//               placeholder="Enter the name of the item"
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
//               placeholder="Describe the item you want to buy"
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
//             <label htmlFor="price" className="label">Price:</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               required
//               className="input"
//               placeholder="Enter the price of the item"
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

// export default Buy;

import React, { useState, useRef } from 'react';
import './Forms.css';
import axios from 'axios';
import Swal from 'sweetalert2';
const Buy = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemDescription: '',
    contactInfo: '',
    itemImage: null,
    price: 0,
  });

  //const fileInputRef = useRef(null); // Ref for file input

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
    try {
      const data = new FormData();
      data.append('itemName', formData.itemName);
      data.append('itemDescription', formData.itemDescription);
      data.append('price', formData.price);
      data.append('contactInformation', formData.contactInfo);
      data.append('picturepath', formData.itemImage);
      const email = localStorage.getItem('emailid');
      data.append('emailid', email);
      console.log('Token:', localStorage.getItem('generatetoken'));

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('generatetoken')}`, // Include a token if your `verify` middleware requires authentication
        },
      };

      const response = await axios.post(
        'http://localhost:4200/posts/buy-sell/newBuyPosts',
        data,
        config
      );

    console.log('Post created successfully:', response.data);
    // Log the form data
    console.log('Buy Form Submitted', formData);

      Swal.fire({
                      icon: 'success',
                      title: 'Buy form submitted',
                      text: 'Kindly go back to the home page and check the post.',
                      confirmBUttonText: 'OK',
              }); 

    // Reset form fields
    setFormData({
      itemName: '',
      itemDescription: '',
      contactInfo: '',
      itemImage: null,
      price:0,
    });
  }catch(error){
    console.error('Error creating post:', error.response ? error.response.data : error.message);
  }
  };
  //   // Reset file input manually
  //   if (fileInputRef.current) {
  //     fileInputRef.current.value = null;
  //   }
  // };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">🛍️ Buy Item Portal</h1>
        <p className="subtitle">List your item for sale and connect with buyers!</p>
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
              placeholder="Enter the name of the item"
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
              placeholder="Describe the item you're selling"
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
            <label htmlFor="price" className="label">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter the price of the item"
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemImage" className="label">Upload Item Image:</label>
            <input
              type="file"
              id="itemImage"
              name="itemImage"
              //ref={fileInputRef} // Attach ref to input
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

export default Buy;
