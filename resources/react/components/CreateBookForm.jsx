import React, { useState } from 'react';
import axios from 'axios';

const CreateBookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    page_number: '',
    category_id: 1,
    body: '',
    user_id: 1,
    image: '',
    amount: 0,
    price: '',
    size: 'A4',
    notes: '',
    stickers: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/books', formData)
      .then((response) => {
        console.log(response.data);
        // Dodajte logiku za obradu uspješnog odgovora
      })
      .catch((error) => {
        console.error(error);
        // Dodajte logiku za obradu greške
      });
  };

  return (
    <div>
      <h2>Create New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>Page Number:</label>
        <input type="text" name="page_number" value={formData.page_number} onChange={handleChange} />
        <br />
        <label>Body:</label>
        <textarea name="body" value={formData.body} onChange={handleChange} required />
        <br />
        <label>Image:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
        <br />
        <label>Price:</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} required />
        <br />
        <label>Notes:</label>
        <input type="text" name="notes" value={formData.notes} onChange={handleChange} />
        <br />
        <label>Stickers:</label>
        <input type="text" name="stickers" value={formData.stickers} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBookForm;
