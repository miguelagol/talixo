import React from 'react';
import classnames from 'classnames/bind';
import css from './BookingSteps.module.scss';

const classNames = classnames.bind(css);

export default function BookingSteps() {
   const steps = ['Where & When', 'Choose a Car', 'Details & Payment'];

   const activeStep = 2;

   const stepsClasses = classNames('booking-steps', { [`booking-steps--${activeStep}`]: activeStep + 1 });

   return (
      <div className={stepsClasses}>
         {steps.map((step, index) => {
            const stepClasses = classNames('booking-step', { 'active-step': index === activeStep });
            return (
               <div key={step} className={stepClasses}>
                  <div className={css['step-number']}>{index + 1}</div>
                  <div className={css['step-label']}>{step}</div>
               </div>
            );
         })}
      </div>
   );
}
