import React from 'react';
import AsyncSelect from 'react-select/lib/Async';

export default function Select({ ...rest }) {
   const selectStyles = {
      control: styles => ({ ...styles, border: 0 }),
      placeholder: styles => ({
         ...styles,
         color: '#d2d6da',
         fontSize: 20,
         margin: 0,
         ' + div': { margin: 0, padding: 0 },
      }),
      indicatorsContainer: styles => ({
         ...styles,
         svg: { width: 32, height: 32, color: '#ff4800' },
      }),
      valueContainer: styles => ({
         ...styles,
         padding: '0px 8px',
      }),
      input: styles => ({
         ...styles,
         fontSize: 20,
      }),
      singleValue: styles => ({
         ...styles,
         fontSize: 20,
      }),
      option: styles => ({
         ...styles,
         color: 'black',
      }),
   };

   return <AsyncSelect styles={selectStyles} {...rest} />;
}
