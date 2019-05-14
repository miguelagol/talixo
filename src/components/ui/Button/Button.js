import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './Button.module.scss';

const classNames = classnames.bind(css);

export default function Button({ className, type, children, variant, ...rest }) {
   const classes = classNames('button', className, {
      [`button--${variant}`]: variant,
   });

   return (
      <button className={classes} type={type} {...rest}>
         {children}
      </button>
   );
}

Button.propTypes = {
   className: PropTypes.string,
   type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
   children: PropTypes.node.isRequired,
   variant: PropTypes.oneOf(['rounded']),
};

Button.defaultProps = {
   className: undefined,
   variant: undefined,
};
