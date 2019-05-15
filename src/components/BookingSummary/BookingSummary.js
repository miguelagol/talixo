import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import css from './BookingSummary.module.scss';

export default function BookingSummary({ formState }) {
   const {
      startAddress,
      endAddress,
      date,
      voucherCode,
      passengers,
      suitcase,
      sportLuggage,
      pets,
      childrenSeats,
   } = formState;

   return (
      <div className={css.summary}>
         <h2 className={css.header}>Your booking</h2>
         <div className={css['summary-list']}>
            <div className={css['booking-value']}>
               <div className={css.label}>From:</div>
               <div>{startAddress.label}</div>
            </div>
            <div className={css['booking-value']}>
               <div className={css.label}>To: </div>
               <div>{endAddress.label}</div>
            </div>
            <div className={css['booking-value']}>
               <div className={css.label}>Date:</div>
               <div>
                  {format(date, 'dddd')}, {format(date, 'DD MMMM YYYY')}
               </div>
            </div>
            <div className={css['booking-value']}>
               <div className={css.label}>Pickup time:</div>
               <div>{format(date, 'HH:mm')}</div>
            </div>
            {passengers && (
               <div className={css['booking-value']}>
                  <div className={css.label}>Passengers:</div> <div>{passengers.label}</div>
               </div>
            )}
            {suitcase !== undefined && suitcase.label !== 0 && (
               <div className={css['booking-value']}>
                  <div className={css.label}>Luggage:</div> <div>{suitcase.label}</div>
               </div>
            )}
            {sportLuggage !== undefined && sportLuggage.label !== 0 && (
               <div className={css['booking-value']}>
                  <div className={css.label}>Sport luggage:</div> <div>{sportLuggage.label}</div>
               </div>
            )}
            {pets !== undefined && pets.label !== 0 && (
               <div className={css['booking-value']}>
                  <div className={css.label}>Animals:</div> <div>{pets.label}</div>
               </div>
            )}
            {childrenSeats !== undefined && childrenSeats.label !== 0 && (
               <div className={css['booking-value']}>
                  <div className={css.label}>Children seats:</div> <div>{childrenSeats.label}</div>
               </div>
            )}
            {voucherCode !== undefined && (
               <div className={css['booking-value']}>
                  <div className={css['voucher-label']}>Voucher code:</div> <div>{voucherCode}</div>
               </div>
            )}
         </div>
      </div>
   );
}

BookingSummary.propTypes = {
   formState: PropTypes.object.isRequired,
};
