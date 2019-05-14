import React from 'react';
import PropTypes from 'prop-types';
import css from './ErrorMessage.module.scss';

export default function ErrorMessage({ error }) {
   return <span className={css.errorMessage}>{error}</span>;
}

ErrorMessage.propTypes = {
   error: PropTypes.string,
};

ErrorMessage.defaultProps = {
   error: undefined,
};
