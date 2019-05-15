import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './BookingSteps.module.scss';

const classNames = classnames.bind(css);

export default function BookingSteps({ location }) {
   const steps = [
      { name: 'Where & When', path: '/' },
      { name: 'Choose a Car', path: '/second-booking-step' },
      { name: 'Details & Payment', path: '/third-booking-step' },
   ];

   const activeStep = steps.findIndex(({ path }) => path === location.pathname) + 1;

   const stepsClasses = classNames('booking-steps', { [`booking-steps--${activeStep}`]: activeStep });

   return (
      <div className={stepsClasses}>
         {steps.map(({ name }, index) => {
            const stepClasses = classNames('booking-step', { 'active-step': index === activeStep - 1 });
            return (
               <NavLink to={steps[index].path} key={name} className={stepClasses}>
                  <div className={css['step-number']}>{index + 1}</div>
                  <div className={css['step-label']}>{name}</div>
               </NavLink>
            );
         })}
      </div>
   );
}

BookingSteps.propTypes = {
   location: PropTypes.object.isRequired,
};
