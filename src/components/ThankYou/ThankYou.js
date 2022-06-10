import illustration from './illustration-thank-you.svg';
import React from 'react';
import './ThankYou.css';

export const ThankYou = (props) => {
  return (
    <div className='card--tanks'>
      <div>
        <img className='image' src={illustration} alt='thank you illustration' />
      </div>
      <div>
        <p className='result'>You selected {props.rating} out of 5</p>
      </div>
      <h1>Thank you!</h1>

      <p className='thanks__paragraph'>
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </p>

    </div>
  )
}
