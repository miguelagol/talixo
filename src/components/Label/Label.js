import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './Label.module.scss';

const classNames = classnames.bind(css);

export default function Label({ className, labelPosition, name, children, ...rest }) {
   const classes = classNames('label', className, {
      [`label--${labelPosition}`]: labelPosition,
   });

   return (
      <label className={classes}>
         <span>{name}</span>
         {children}
      </label>
   );
}

Label.propTypes = {
   className: PropTypes.string,
   labelPosition: PropTypes.oneOf(['top', 'left']).isRequired,
   name: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
};

Label.defaultProps = {
   className: undefined,
};
