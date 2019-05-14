import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './Input.module.scss';

const classNames = classnames.bind(css);

const Input = React.forwardRef(function({ className, name, onChange, value, ...rest }, ref) {
   const classes = classNames('input', className);

   const onInputChange = event => onChange(name, event.target.value);

   return <input ref={ref} className={classes} onChange={onInputChange} value={value} {...rest} />;
});

Input.displayName = 'Input';

Input.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.string,
};

Input.defaultProps = {
   className: undefined,
   name: undefined,
   onChange: () => {},
   value: '',
};

export default Input;
