import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './Input.module.scss';

const classNames = classnames.bind(css);

const Input = React.forwardRef(function({ className, ...rest }, ref) {
   const classes = classNames('input', className);

   return <input ref={ref} className={classes} {...rest} />;
});

Input.displayName = 'Input';

Input.propTypes = {
   className: PropTypes.string,
};

Input.defaultProps = {
   className: undefined,
};

export default Input;
