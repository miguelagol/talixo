import React from 'react';
import Media from 'react-media';
import { FaBaby as BabyIcon } from 'react-icons/fa';
import { FaDog as DogIcon } from 'react-icons/fa';
import { FaSuitcase as SuitcaseIcon } from 'react-icons/fa';
import { FaSkiingNordic as SportIcon } from 'react-icons/fa';
import { IoIosPerson as PersonIcon } from 'react-icons/io';
import Button from '../Button';
import LabelContainer from '../LabelContainer';
import Input from '../Input';
import Select from '../Select';
import DatePicker from '../DatePicker';
import DayPicker from '../DayPicker';
import css from './FirstBookingStepForm.module.scss';

export default function FirstBookingStepForm() {
   return (
      <Media query="(max-width: 980px)">
         {matches => {
            const labelPosition = matches ? 'top' : 'left';

            return (
               <div className={css.container}>
                  <LabelContainer labelPosition={labelPosition} label="Pick up:">
                     <Select placeholder="e.g Torstrasse 124, Berlin" />
                  </LabelContainer>

                  <LabelContainer labelPosition={labelPosition} label="Destination:">
                     <Select placeholder="e.g Tegel Airport" />
                  </LabelContainer>

                  <LabelContainer labelPosition={labelPosition} label={labelPosition === 'top' ? 'On:' : ''} as="div">
                     <DayPicker />
                  </LabelContainer>

                  <LabelContainer labelPosition={labelPosition} label="Voucher code (optional):">
                     <Input />
                  </LabelContainer>

                  <div className={css['options-container']}>
                     <span>For 1-2 passengers with 1-2 bags</span>
                     <span className={css['more-options']}>more options</span>
                     <div className={css.options}>
                        <LabelContainer labelPosition="left" label={<PersonIcon className={css.icon} />} variant="dark">
                           <Select placeholder="2" />
                        </LabelContainer>

                        <LabelContainer
                           labelPosition="left"
                           label={<SuitcaseIcon className={css.icon} />}
                           variant="dark"
                        >
                           <Select placeholder="2" />
                        </LabelContainer>

                        <LabelContainer labelPosition="left" label={<SportIcon className={css.icon} />} variant="dark">
                           <Select placeholder="0" />
                        </LabelContainer>

                        <LabelContainer labelPosition="left" label={<DogIcon className={css.icon} />} variant="dark">
                           <Select placeholder="0" />
                        </LabelContainer>

                        <LabelContainer labelPosition="left" label={<BabyIcon className={css.icon} />} variant="dark">
                           <Select placeholder="0" />
                        </LabelContainer>
                     </div>
                  </div>
                  <Button type="button">Start Booking</Button>
               </div>
            );
         }}
      </Media>
   );
}
