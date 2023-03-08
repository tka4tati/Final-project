import React from 'react';
import { Spinner,Placeholder } from 'react-bootstrap';
import './Loading.scss';

export const Loading = () => {
  return (
    <div className='skeleton'>
      <div className='skeleton-box'>
        <Placeholder as="div" animation="glow">
          <Placeholder xs={4} />
        </Placeholder>
        <Placeholder as="div" animation="wave">
          <Placeholder xs={8} />
        </Placeholder>
      </div>
     
      <div className='skeleton skeleton-text'>Loading
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
      </div>
    </div>
  )
}
