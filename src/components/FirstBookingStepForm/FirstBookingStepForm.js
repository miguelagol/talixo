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
import css from './FirstBookingStepForm.module.scss';

export default function FirstBookingStepForm() {
   return (
      <Media query="(max-width: 980px)">
         {matches => {
            const labelPosition = matches ? 'top' : 'left';

            return (
               <>
                  <LabelContainer labelPosition={labelPosition} label="Pick up:">
                     <Select placeholder="e.g Torstrasse 124, Berlin" />
                  </LabelContainer>

                  <LabelContainer labelPosition={labelPosition} label="Destination:">
                     <Select placeholder="e.g Tegel Airport" />
                  </LabelContainer>

                  <LabelContainer labelPosition={labelPosition} label="On:">
                     <DatePicker value={new Date('05 12 2019 8:00 PM')} />
                  </LabelContainer>

                  <LabelContainer labelPosition={labelPosition} label="Voucher code (optional):">
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

                        <LabelContainer
                           labelPosition="left"
                           label={<DogIcon style={{ padding: '0 8px' }} />}
                           variant="dark"
                        >
                           <Select placeholder="0" />
                        </LabelContainer>

                        <LabelContainer
                           labelPosition="left"
                           label={<BabyIcon style={{ padding: '0 8px' }} />}
                           variant="dark"
                        >
                           <Select placeholder="0" />
                        </LabelContainer>
                     </div>
                  </div>
                  <Button type="button">Start Booking</Button>
               </>
            );
         }}
      </Media>
   );
}
