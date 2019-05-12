import React from 'react';
import AsyncSelect from 'react-select/lib/Async';

const colors = {
   orange: '#ff4800',
   porcelain: '#EBECED',
   iron: '#d2d6da',
   tundora: '#4c4c4c',
};

export default function Select({ ...rest }) {
   const selectStyles = {
      control: (styles, { isFocused }) => ({
         ...styles,
         border: 0,
         boxShadow: 'none',
         outline: isFocused ? 'rgba(0, 102, 245, 0.25) auto 5px' : 'none',
         outlineOffset: -2,
      }),
      placeholder: styles => ({
         ...styles,
         color: colors.iron,
         fontSize: 20,
         margin: 0,
      }),
      indicatorsContainer: styles => ({
         ...styles,
         svg: { width: 32, height: 32, color: colors.orange },
      }),
      valueContainer: styles => ({
         ...styles,
         padding: '0px 8px',
      }),
      menu: styles => ({
         ...styles,
         marginTop: 4,
      }),
      input: styles => ({
         ...styles,
         fontSize: 20,
      }),
      singleValue: styles => ({
         ...styles,
         fontSize: 20,
         lineHeight: '48px',
      }),
      option: styles => ({
         ...styles,
         fontSize: 20,
         color: colors.tundora,
         padding: 12,
         backgroundColor: 'transparent',
         ':hover': {
            ...styles[':hover'],
            backgroundColor: colors.porcelain,
         },
         ':active': {
            ...styles[':active'],
            backgroundColor: colors.porcelain,
         },
      }),
      noOptionsMessage: styles => ({
         ...styles,
         padding: 10,
      }),
   };

   return <AsyncSelect escapeClearsValue isClearable isSearchable styles={selectStyles} {...rest} />;
}
