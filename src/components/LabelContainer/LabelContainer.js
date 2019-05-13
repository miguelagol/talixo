import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './LabelContainer.module.scss';

const classNames = classnames.bind(css);

export default function LabelContainer({ className, labelPosition, label, children, variant, as, ...rest }) {
   const containerClasses = classNames('label-container', className, {
      [`label-container--${labelPosition}`]: labelPosition,
      'no-label': !label,
   });

   const labelClasses = classNames('label', { [`label--${variant}`]: variant });

   const Container = as || 'label';

   return (
      <Container className={containerClasses} {...rest}>
         {label && <div className={labelClasses}>{label}</div>}
         <div className={css.children}>{children}</div>
      </Container>
   );
}

LabelContainer.propTypes = {
   className: PropTypes.string,
   labelPosition: PropTypes.oneOf(['top', 'left', 'right']).isRequired,
   label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
   children: PropTypes.node.isRequired,
   variant: PropTypes.oneOf(['dark']),
   as: PropTypes.string,
};

LabelContainer.defaultProps = {
   className: undefined,
   variant: undefined,
   as: undefined,
};
