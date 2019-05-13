import React from 'react';
import css from './DayPicker.module.scss';

export default function DaysContainer(date) {
   return (
      <div className={css['days-container']}>
         <input type="radio" id="day1" name="radios" checked />
         <label htmlFor="day1" className={css['day-container']}>
            <span className={css.date}>13.05</span>
            <span className={css.day}>Today</span>
         </label>

         <input type="radio" id="day2" name="radios" />
         <label htmlFor="day2" className={css['day-container']}>
            <span className={css.date}>14.05</span>
            <span className={css.day}>Tomorrow</span>
         </label>

         <input type="radio" id="day3" name="radios" />
         <label htmlFor="day3" className={css['day-container']}>
            <span className={css.date}>15.05</span>
            <span className={css.day}>Wednesday</span>
         </label>
      </div>
   );
}
