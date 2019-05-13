import React from 'react';
import css from './App.module.scss';
import logo from './images/logo.png';
import BookingSteps from './components/BookingSteps';
import DayPicker from './components/DayPicker';

function App() {
   return (
      <div className={css.app}>
         <header className={css.header}>
            <img src={logo} alt="Talixo logo" className={css['talixo-logo']} />
         </header>

         <br />
         <br />

         <div className={css['content-container']}>
            <BookingSteps activeStep={1} />
            <DayPicker date={new Date()} />
            <br />
            <br />
         </div>
      </div>
   );
}

export default App;
