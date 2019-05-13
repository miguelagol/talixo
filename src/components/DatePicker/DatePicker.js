import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../Input';
import css from './DatePicker.module.scss';

export default function DatePicker({ value, ...rest }) {
   return <ReactDatePicker customInput={<Input />} calendarClassName={css.calendar} {...rest} selected={value} />;
}

DatePicker.propTypes = {
   value: PropTypes.object.isRequired,
};
