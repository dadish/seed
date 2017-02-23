import React from 'react';
import './style.css';

export const ItemComponent = ({ item }) => (
  <li className="trd-item">
    {item.name}
  </li>
);

export default ItemComponent;