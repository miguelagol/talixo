import React from 'react';
import css from './App.module.scss';
import logo from './images/logo.png';
import BookingSteps from './components/BookingSteps';
import Button from './components/Button';

function App() {
   return (
      <div className={css.app}>
         <header className={css.header}>
            <img src={logo} alt="Talixo logo" className={css['talixo-logo']} />
         </header>
         <div className={css['content-container']}>
            <BookingSteps activeStep={3} />
            <Button type="button">Start Booking</Button>
         </div>
      </div>
   );
}

export default App;
