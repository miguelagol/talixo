import React from 'react';
import css from './App.module.scss';
import logo from './images/logo.png';
import BookingSteps from './components/BookingSteps';
import DayPicker from './components/DayPicker';
import Button from './components/Button';
import LabelContainer from './components/LabelContainer';
import Input from './components/Input';
import Select from './components/Select';
import DatePicker from './components/DatePicker';
import { FaBaby as BabyIcon } from 'react-icons/fa';
import { FaDog as DogIcon } from 'react-icons/fa';
import { FaSuitcase as SuitcaseIcon } from 'react-icons/fa';
import { FaSkiingNordic as SportIcon } from 'react-icons/fa';
import { IoIosPerson as PersonIcon } from 'react-icons/io';

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

            <LabelContainer labelPosition="top" label="Pick up:">
               <Select placeholder="e.g Torstrasse 124, Berlin" />
            </LabelContainer>

            <LabelContainer labelPosition="top" label="Destination:">
               <Select placeholder="e.g Tegel Airport" />
            </LabelContainer>

            <LabelContainer labelPosition="top" label="On:">
               <DatePicker value={new Date('05 12 2019 8:00 PM')} />
            </LabelContainer>

            <LabelContainer labelPosition="top" label="Voucher code (optional):">
               <Input />
            </LabelContainer>

            <div className={css['options-container']}>
               <span>For 1-2 passengers with 1-2 bags</span>
               <span className={css['more-options']}>more options</span>
               <div className={css.options}>
                  <LabelContainer
                     labelPosition="left"
                     label={<PersonIcon style={{ padding: '0 8px' }} />}
                     variant="dark"
                  >
                     <Select placeholder="2" />
                  </LabelContainer>

                  <LabelContainer
                     labelPosition="left"
                     label={<SuitcaseIcon style={{ padding: '0 8px' }} />}
                     variant="dark"
                  >
                     <Select placeholder="2" />
                  </LabelContainer>

                  <LabelContainer
                     labelPosition="left"
                     label={<SportIcon style={{ padding: '0 8px' }} />}
                     variant="dark"
                  >
                     <Select placeholder="0" />
                  </LabelContainer>

                  <LabelContainer labelPosition="left" label={<DogIcon style={{ padding: '0 8px' }} />} variant="dark">
                     <Select placeholder="0" />
                  </LabelContainer>

                  <LabelContainer labelPosition="left" label={<BabyIcon style={{ padding: '0 8px' }} />} variant="dark">
                     <Select placeholder="0" />
                  </LabelContainer>
               </div>
            </div>

            <Button type="button">Start Booking</Button>
         </div>
      </div>
   );
}

export default App;
