import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { carsOptions } from '../../data/carsData';
import BookingSummary from '../BookingSummary';
import Button from '../ui/Button';
import css from './SecondBookingStepForm.module.scss';

export default function SecondBookingStepForm({ formState, isFormEmpty }) {
   return isFormEmpty ? (
      <Redirect to="/" />
   ) : (
      <div className={css.container}>
         <BookingSummary formState={formState} />
         <div className={css['cars-container']}>
            {carsOptions.map(({ url, title, brands, features, price }, index) => (
               // eslint-disable-next-line react/jsx-key
               <div className={css['car-container']}>
                  <div className={css['price-container']}>
                     <span className={css.price}>€ {price}</span>
                     <Button variant="rounded" type="button" className={css['price-button']}>
                        Book {title}
                     </Button>
                  </div>
                  <img src={url} alt="Car" className={css.car} />
                  <div className={css.description}>
                     <h1 className={css.title}>{title}</h1>
                     <div className={css.brands}>
                        <h3 className={css.header}>EXAMPLE CARS</h3>
                        {brands.map(brand => (
                           // eslint-disable-next-line react/jsx-key
                           <span>{brand}</span>
                        ))}
                     </div>
                     <div className={css.features}>
                        <h3 className={css.header}>FEATURES</h3>
                        {features.map(feature => (
                           // eslint-disable-next-line react/jsx-key
                           <span>{feature}</span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

SecondBookingStepForm.propTypes = {
   formState: PropTypes.object.isRequired,
   isFormEmpty: PropTypes.bool.isRequired,
};
