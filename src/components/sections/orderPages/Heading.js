import HeroImage from "../../../assets/food/food4.webp";
import React, { useState } from 'react';
export default function Heading() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [orderItems, setOrderItems] = useState([{ item: '', quantity: 1 }]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleItemChange = (index, event) => {
    const newOrderItems = [...orderItems];
    newOrderItems[index][event.target.name] = event.target.value;
    setOrderItems(newOrderItems);
  };

  const handleAddItem = () => {
    setOrderItems([...orderItems, { item: '', quantity: 1 }]);
  };

  const handleRemoveItem = (index) => {
    const newOrderItems = [...orderItems];
    newOrderItems.splice(index, 1);
    setOrderItems(newOrderItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to the backend
    console.log('Order Details:', { name, email, phone, address, orderItems });
    // Reset form after submission
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setOrderItems([{ item: '', quantity: 1 }]);
  };
  return (
    <>
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Order Online</h1>
      </div>
    </header>
    <div className="order-form-container" style={{textAlign:'center'}}>
      <h2>Order Online</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br/>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br/>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <br/>
          <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <br/>
          <input type="text" id="address" value={address} onChange={handleAddressChange} required />
        </div>

        {orderItems.map((orderItem, index) => (
          <div key={index} className="form-group">
            <label htmlFor={`item-${index}`}>Item:</label>
            <br/>
            
            <input
              type="text"
              id={`item-${index}`}
              name="item"
              value={orderItem.item}
              onChange={(e) => handleItemChange(index, e)}
              required
            />
            <br/>
            <label htmlFor={`quantity-${index}`}>Quantity:</label>
            <br/>
            <input
              type="number"
              id={`quantity-${index}`}
              name="quantity"
              value={orderItem.quantity}
              onChange={(e) => handleItemChange(index, e)}
              min="1"
              required
            />
            {orderItems.length > 1 && (
              <button type="button" onClick={() => handleRemoveItem(index)} className="remove-item-btn">
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddItem} className="add-item-btn">
          Add 
        </button>
        <button type="submit" className="submit-btn">Place Order</button>
      </form>
    </div>
    </>
  );
}
