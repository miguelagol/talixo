import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './BookingSteps.module.scss';

const classNames = classnames.bind(css);

export default function BookingSteps({ activeStep }) {
   const steps = ['Where & When', 'Choose a Car', 'Details & Payment'];

   const stepsClasses = classNames('booking-steps', { [`booking-steps--${activeStep}`]: activeStep });

   return (
      <div className={stepsClasses}>
         {steps.map((step, index) => {
            const stepClasses = classNames('booking-step', { 'active-step': index === activeStep - 1 });
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

BookingSteps.propTypes = {
   activeStep: PropTypes.number,
};

BookingSteps.defaultProps = {
   activeStep: 1,
};
