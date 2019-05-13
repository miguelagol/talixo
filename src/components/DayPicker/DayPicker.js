import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { GoCalendar } from 'react-icons/go';
import { FaRegClock } from 'react-icons/fa';
import DatePicker from '../DatePicker';
import LabelContainer from '../LabelContainer';
import css from './DayPicker.module.scss';

const classNames = classnames.bind(css);

function DayPicker({ labelPosition, isSmallScreen }) {
   const labelClasses = classNames('day-container', 'active');

   const containerClasses = classNames('container', { 'small-screen': isSmallScreen });

   return (
      <div className={containerClasses}>
         <LabelContainer labelPosition={labelPosition} label={labelPosition === 'top' ? 'On:' : ''} as="div">
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
                     startOpen
                     showTimeSelect={isSmallScreen}
                     timeIntervals={15}
                     dateFormat="hh:mm"
                     timeCaption="Time"
                  />
               </label>
            </div>
         </LabelContainer>
         {!isSmallScreen && (
            <LabelContainer labelPosition={labelPosition} label={labelPosition === 'top' ? 'At:' : ''} as="div">
               <LabelContainer labelPosition="right" label={<FaRegClock className={css['clock-icon']} />}>
                  <DatePicker
                     value={new Date('05 12 2019 8:00 PM')}
                     popperClassName={css.popper}
                     showTimeSelect
                     showTimeSelectOnly
                     timeIntervals={15}
                     dateFormat="hh:mm"
                     timeCaption="Time"
                  />
               </LabelContainer>
            </LabelContainer>
         )}
      </div>
   );
}

DayPicker.propTypes = {
   labelPosition: PropTypes.string.isRequired,
   isSmallScreen: PropTypes.bool.isRequired,
};

// eslint-disable-next-line react/display-name
export default function(props) {
   return (
      <Media query="(max-width: 500px)">
         {matches => {
            const isSmallScreen = matches;

            return <DayPicker {...props} isSmallScreen={isSmallScreen} />;
         }}
      </Media>
   );
}
