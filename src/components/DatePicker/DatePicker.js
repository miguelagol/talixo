import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../Input';
import css from './DatePicker.module.scss';

export default function DatePicker({ value, ...rest }) {
   return (
      <ReactDatePicker
         customInput={<Input />}
         calendarClassName={css.calendar}
         showTimeSelect
         timeFormat="HH:mm"
         dateFormat="MMMM d, yyyy h:mm aa"
         timeIntervals={15}
         timeCaption="time"
         {...rest}
         selected={value}
      />
   );
}

DatePicker.propTypes = {
   value: PropTypes.object.isRequired,
};
