import React, { useState } from 'react';

const Popup = ({ onClose, onAddData }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    //e.preventDefault();
    onAddData(name,price,category,description);
    //console.log(name,price,category,description);
    setName('');
    setPrice('');
    setCategory('');
    setDescription('');
    onClose();
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
           <label>
            Name:
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter data"
            />
            </label>
            <br></br>
            <label>
            Price:
            <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter data"
            />
            </label>
            <br></br>
            <label>
            Category:
            <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter data"
            />
            </label>
          <br></br>
          <label>
            Description:
            <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter data"
            />
            </label>
            <br></br>       
      </div>
      <button onClick={handleSubmit}>Add Data</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
