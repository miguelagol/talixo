import React from 'react';
import AsyncSelect from 'react-select/lib/Async';

export default function Select({ ...rest }) {
   const selectStyles = {
      control: styles => ({ ...styles, border: 0, height: '48px', ' > div': { padding: 0 } }),
      placeholder: styles => ({ ...styles, color: '#d2d6da', ' + div': { margin: 0, padding: 0 } }),
      indicatorsContainer: styles => ({
         ...styles,
         svg: { width: '30px', height: '30px', color: '#ff4800' },
      }),
   };

   return <AsyncSelect styles={selectStyles} {...rest} />;
}
