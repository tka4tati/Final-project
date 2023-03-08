import React from 'react';
import './Shop.scss';

export const Shop = () => {
  return (
    <div className="shop__container">
        <p id="shop"className="shop__subtitle">SHOP</p>
        <h1 className="shop__title">How to find us?</h1>
        <p className="shop__description">The store is located at Kharkiv city, Sumska street 2</p>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.962363642803!2d36.22812482140169!3d49.99331507188788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0f01b926203%3A0x9a2ea1138401f886!2z0YPQuy4g0KHRg9C80YHQutCw0Y8sIDIsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1678285525995!5m2!1sru!2sua"
            width="600" 
            height="450" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
    </div>
  )
}
