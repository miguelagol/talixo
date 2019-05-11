import React from 'react';

export default function BookingSteps() {
   const steps = ['Where & When', 'Choose a Car', 'Details & Payment'];

   return steps.map((step, index) => (
      <div key={index}>
         <div>{index + 1}</div>
         <div>{step}</div>
      </div>
   ));
}
