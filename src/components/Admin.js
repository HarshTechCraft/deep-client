import axios from 'axios';
import React, { useState } from 'react';


function Admin() {
  const [formData, setFormData] = useState({
    activity: '',
    location: '',
    date: '',
    hotel: '',
    price: '',
    image: '',
    rating: '',
    guests: '',
    reviews: ''
  });

  const url =
    process.env.NODE_ENV === "production"
      ? "https://deep-server-c0bq.onrender.com"
      : "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${url}/admin`,  formData );
        console.log("hello"+response.data)
        alert(response.data.savedVenue.activity)
      } catch (error) {
        console.error("Error during admin insertion:", error);
      }

    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
      <h1>Event Admin</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Activity:
          <input type="text" name="activity" value={formData.activity} onChange={handleChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <br />
        <label>
          Hotel:
          <input type="text" name="hotel" value={formData.hotel} onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
        </label>
        <br />
        <label>
          Guests:
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} />
        </label>
        <br />
        <label>
          Reviews:
          <input type="number" name="reviews" value={formData.reviews} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" name="image" onChange={handleImageUpload} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData.image && (
        <div>
          <h3>Uploaded Image Preview:</h3>
          <img src={formData.image} alt="Uploaded Preview" width="200" />
        </div>
      )}
    </div>
  );
}

export default Admin;
