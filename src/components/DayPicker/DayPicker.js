import React from 'react';
import classnames from 'classnames/bind';
import { GoCalendar } from 'react-icons/go';
import DatePicker from '../DatePicker';
import css from './DayPicker.module.scss';

const classNames = classnames.bind(css);

export default function DaysContainer() {
   const labelClasses = classNames('day-container', 'active');

   return (
      <div className={css['days-container']}>
         <label className={labelClasses}>
            <input type="radio" id="day1" name="radios" />
            <span className={css.date}>13.05</span>
            <span className={css.day}>Today</span>
         </label>

         <label className={css['day-container']}>
            <input type="radio" id="day2" name="radios" />
            <span className={css.date}>14.05</span>
            <span className={css.day}>Tomorrow</span>
         </label>

         <label className={css['day-container']}>
            <input type="radio" id="day3" name="radios" />
            <span className={css.date}>15.05</span>
            <span className={css.day}>Wednesday</span>
         </label>

         <label className={css['calendar-container']}>
            {<GoCalendar className={css['calendar-icon']} />}
            <DatePicker
               value={new Date('05 12 2019 8:00 PM')}
               className={css['date-picker']}
               popperPlacement="left"
               popperClassName={css.popper}
            />
         </label>
      </div>
   );
}
