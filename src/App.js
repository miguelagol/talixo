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
            <LabelContainer labelPosition="left" label="Voucher code (optional):">
               <Input />
            </LabelContainer>
            <br />
            <LabelContainer labelPosition="top" label="Voucher code (optional):">
               <Input />
            </LabelContainer>
            <br />
            <br />
            <LabelContainer labelPosition="left" label={<BabyIcon style={{ padding: '0 8px' }} />} variant="dark">
               <Select placeholder="e.g Torstrasse 124, Berlin" />
            </LabelContainer>
            <br />
            <LabelContainer labelPosition="top" label="Pick up:">
               <Select placeholder="e.g Torstrasse 124, Berlin" />
            </LabelContainer>
            <br />
            <Button type="button">Start Booking</Button>
            <br />
            <br />
            <LabelContainer labelPosition="left" label="Pick up:">
               <DatePicker value={new Date('05 12 2019 8:00 PM')} />
            </LabelContainer>
         </div>
      </div>
   );
}

export default App;
