import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Spinner from './Spinner';
import css from './Button.module.scss';

const classNames = classnames.bind(css);

export default function Button({ className, type, children, variant, loading, ...rest }) {
   const classes = classNames('button', className, {
      [`button--${variant}`]: variant,
   });

   return (
      <button className={classes} type={type} {...rest}>
         {children}
         {loading && <Spinner className={css.spinner} />}
      </button>
   );
}

Button.propTypes = {
   className: PropTypes.string,
   type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
   children: PropTypes.node.isRequired,
   variant: PropTypes.oneOf(['rounded']),
   loading: PropTypes.bool,
};

Button.defaultProps = {
   className: undefined,
   variant: undefined,
   loading: false,
};
