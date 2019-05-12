import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './LabelContainer.module.scss';

const classNames = classnames.bind(css);

export default function LabelContainer({ className, labelPosition, label, children, variant, ...rest }) {
   const containerClasses = classNames('label-container', className, {
      [`label-container--${labelPosition}`]: labelPosition,
   });

   const labelClasses = classNames('label', { [`label--${variant}`]: variant });

   return (
      <label className={containerClasses} {...rest}>
         <div className={labelClasses}>{label}</div>
         <div className={css.children}>{children}</div>
      </label>
   );
}

LabelContainer.propTypes = {
   className: PropTypes.string,
   labelPosition: PropTypes.oneOf(['top', 'left']).isRequired,
   label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
   children: PropTypes.node.isRequired,
   variant: PropTypes.oneOf(['dark']),
};

LabelContainer.defaultProps = {
   className: undefined,
   variant: undefined,
};
