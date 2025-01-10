import React, { useEffect, useState } from 'react';
import './display.css';

const Portal = ({ type }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/items?type=${type.toLowerCase()}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  if (loading) {
    return <div className="portal loading">Loading items...</div>;
  }

  return (
    <div className="portal-container">
      <div className={`portal portal-${type.toLowerCase()}`}>
        <h1 className="portal-title">{type} Portal</h1>
        <p className="portal-subtitle">Browse items in the {type} category!</p>
        <div className="items-grid">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="item-card" key={index}>
                <div className="item-image-wrapper">
                  <img
                    src={item.image || 'placeholder.jpg'}
                    alt={item.name}
                    className="item-image"
                  />
                </div>
                <h2 className="item-title">{item.name}</h2>
                <p className="item-description">{item.description}</p>
                <p className="item-contact">Contact: {item.contact}</p>
              </div>
            ))
          ) : (
            <p>No items available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Portal;
