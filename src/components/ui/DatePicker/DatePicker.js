import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../Input';
import css from './DatePicker.module.scss';

export default function DatePicker({ value, onChange, name, ...rest }) {
   const onDateChange = value => onChange(name, value);

   return (
      <ReactDatePicker
         customInput={<Input />}
         calendarClassName={css.calendar}
         onChange={onDateChange}
         {...rest}
         selected={value}
      />
   );
}

DatePicker.propTypes = {
   value: PropTypes.object.isRequired,
   onChange: PropTypes.func,
   name: PropTypes.string,
};

DatePicker.defaultProps = {
   onChange: () => {},
   name: undefined,
};
