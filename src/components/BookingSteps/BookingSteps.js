import React from 'react';
import css from './BookingSteps.module.scss';

export default function BookingSteps() {
   const steps = ['Where & When', 'Choose a Car', 'Details & Payment'];

   return (
      <div className={css['booking-steps']}>
         {steps.map((step, index) => (
            <div key={step} className={css['booking-step']}>
               <div className={css['step-number']}>{index + 1}</div>
               <div className={css['step-label']}>{step}</div>
            </div>
         ))}
      </div>
   );
}
