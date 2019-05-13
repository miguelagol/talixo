import React from 'react';
import css from './App.module.scss';
import logo from './images/logo.png';
import BookingSteps from './components/BookingSteps';
import FirstBookingStepForm from './components/FirstBookingStepForm';

class App extends React.Component {
   render() {
      return (
         <div className={css.app}>
            <header className={css.header}>
               <img src={logo} alt="Talixo logo" className={css['talixo-logo']} />
            </header>

            <div className={css['content-container']}>
               <BookingSteps activeStep={1} />
               <FirstBookingStepForm />
            </div>
         </div>
      );
   }
}

export default App;
