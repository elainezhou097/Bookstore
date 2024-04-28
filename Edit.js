import React, { useState } from 'react';

function EditPopup({ product, onUpdate, onClose }) {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(editedProduct);
    //console.log(editedProduct);
    onClose();
  };

  return (
    <div>
      <h2>Edit information:</h2>
      <label>NAME：</label>
      <input type="text" id="name" name="name" value={editedProduct.name} onChange={handleInputChange} />
      <br />
      <label>Price：</label>
      <input type="text" id="price" name="price" value={editedProduct.price} onChange={handleInputChange} />
      <br />
      <label>Category：</label>
      <input type="text" id="category" name="category" value={editedProduct.category} onChange={handleInputChange} />
      <br />
      <label>Description：</label>
      <input type="text" id="discription" name="discription" value={editedProduct.description} onChange={handleInputChange} />
      <br />
      
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default EditPopup;
