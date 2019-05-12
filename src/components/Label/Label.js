import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './Label.module.scss';

const classNames = classnames.bind(css);

export default function Label({ className, labelPosition, name, children, variant, ...rest }) {
   const labelClasses = classNames('label', className, {
      [`label--${labelPosition}`]: labelPosition,
   });

   const labelNameClasses = classNames('label-name', { [`label-name--${variant}`]: variant });

   return (
      <label className={labelClasses} {...rest}>
         <div className={labelNameClasses}>{name}</div>
         <div className={css.children}>{children}</div>
      </label>
   );
}

Label.propTypes = {
   className: PropTypes.string,
   labelPosition: PropTypes.oneOf(['top', 'left']).isRequired,
   name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
   children: PropTypes.node.isRequired,
   variant: PropTypes.oneOf(['dark']),
};

Label.defaultProps = {
   className: undefined,
   variant: undefined,
};
