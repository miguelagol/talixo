import React from 'react';
import css from './App.module.scss';
import logo from './images/logo.png';
import BookingSteps from './components/BookingSteps';
import Button from './components/Button';
import LabelContainer from './components/LabelContainer';
import Input from './components/Input';
import Select from './components/Select';
import DatePicker from './components/DatePicker';
import { FaBaby as BabyIcon } from 'react-icons/fa';

function App() {
   return (
      <div className={css.app}>
         <header className={css.header}>
            <img src={logo} alt="Talixo logo" className={css['talixo-logo']} />
         </header>

         <div className={css['content-container']}>
            <BookingSteps activeStep={1} />
            <br />
            <br />

            <div className={css['days-container']}>
               <input type="radio" id="day1" name="radios" checked />
               <label htmlFor="day1" className={css['day-container']}>
                  <span className={css.date}>13.05</span>
                  <span className={css.day}>Today</span>
               </label>

               <input type="radio" id="day2" name="radios" />
               <label htmlFor="day2" className={css['day-container']}>
                  <span className={css.date}>14.05</span>
                  <span className={css.day}>Tomorrow</span>
               </label>

               <input type="radio" id="day3" name="radios" />
               <label htmlFor="day3" className={css['day-container']}>
                  <span className={css.date}>15.05</span>
                  <span className={css.day}>Wednesday</span>
               </label>
            </div>
         </div>
      </div>
   );
}

export default App;
