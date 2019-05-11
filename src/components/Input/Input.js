import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './Input.module.scss';

const classNames = classnames.bind(css);

export default function Input({ className, ...rest }) {
   const classes = classNames('input', className);

   return <input className={classes} {...rest} />;
}

Input.propTypes = {
   className: PropTypes.string,
};

Input.defaultProps = {
   className: undefined,
};
