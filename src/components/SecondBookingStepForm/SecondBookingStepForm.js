import React from 'react';
import PropTypes from 'prop-types';
import BookingSummary from '../BookingSummary';
import css from './SecondBookingStepForm';

export default function SecondBookingStepForm({ formState }) {
   return (
      <div className={css.container}>
         <BookingSummary formState={formState} />
      </div>
   );
}

SecondBookingStepForm.propTypes = {
   formState: PropTypes.object.isRequired,
};
