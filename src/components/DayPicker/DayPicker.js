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

function DayPicker({ labelPosition, isSmallScreen, value, name, onChange }) {
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
                     value={value}
                     name={name}
                     className={css['date-picker']}
                     popperPlacement="left"
                     popperClassName={css.popper}
                     showTimeSelect={isSmallScreen}
                     timeIntervals={15}
                     timeCaption="Time"
                     onChange={onChange}
                  />
               </label>
            </div>
         </LabelContainer>
         {!isSmallScreen && (
            <LabelContainer labelPosition={labelPosition} label={labelPosition === 'top' ? 'At:' : ''} as="div">
               <LabelContainer labelPosition="right" label={<FaRegClock className={css['clock-icon']} />}>
                  <DatePicker
                     value={value}
                     name={name}
                     popperClassName={css.popper}
                     showTimeSelect
                     showTimeSelectOnly
                     timeIntervals={15}
                     timeFormat="HH:mm"
                     dateFormat="HH:mm"
                     timeCaption="Time"
                     onChange={onChange}
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
   value: PropTypes.object,
   name: PropTypes.string,
   onChange: PropTypes.func,
};

DayPicker.defaultProps = {
   value: undefined,
   name: undefined,
   onChange: undefined,
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
