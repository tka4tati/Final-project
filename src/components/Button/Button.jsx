import React from 'react';
import './Button.scss';

export const Button = ({onClick,text}) => {
  return (
    <a onClick={onClick} className="button"> {text} </a>
  )
}
