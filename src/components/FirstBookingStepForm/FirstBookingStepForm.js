import React from 'react';
import Media from 'react-media';
import { FaBaby as BabyIcon } from 'react-icons/fa';
import { FaDog as DogIcon } from 'react-icons/fa';
import { FaSuitcase as SuitcaseIcon } from 'react-icons/fa';
import { FaSkiingNordic as SportIcon } from 'react-icons/fa';
import { IoIosPerson as PersonIcon } from 'react-icons/io';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import LabelContainer from '../ui/LabelContainer';
import Input from '../ui/Input';
import Select from '../ui/Select';
import DayPicker from '../DayPicker';
import ErrorMessage from '../ui/ErrorMessage';
import css from './FirstBookingStepForm.module.scss';
import validator from './validator';
import { getCitiesData } from '../../utils/api';
import BookingSummary from '../BookingSummary';

const options = (numberStart, numberEnd) => {
   const arrayLength = numberEnd - numberStart + 1;
   return new Array(arrayLength).fill(0).map((_, index) => ({
      label: numberStart === 0 ? index : index + 1,
      value: numberStart === 0 ? index : index + 1,
   }));
};

export default function FirstBookingStepForm({ initialFormState, onSubmit, history, isFormEmpty }) {
   return (
      <Media query="(max-width: 980px)">
         {matches => {
            const labelPosition = matches ? 'top' : 'left';

            return (
               <Formik
                  initialValues={initialFormState}
                  onSubmit={(values, { setSubmitting }) => {
                     setTimeout(() => {
                        values.isFormEmpty = false;
                        onSubmit(values);
                        setSubmitting(false);
                        history.push('/second-booking-step');
                     }, 1500);
                  }}
                  validateOnChange={false}
                  validateOnBlur={false}
                  validate={validator}
               >
                  {props => {
                     // eslint-disable-next-line react/prop-types
                     const { values, errors, isSubmitting, handleSubmit, setFieldValue } = props;

                     return (
                        <div className={css['step-container']}>
                           <form onSubmit={handleSubmit}>
                              <div className={css.container}>
                                 <LabelContainer
                                    labelPosition={labelPosition}
                                    label="Pick up:"
                                    showError={errors.startAddress}
                                 >
                                    <Select
                                       placeholder="e.g Torstrasse 124, Berlin"
                                       onChange={setFieldValue}
                                       value={values.startAddress}
                                       name="startAddress"
                                       isClearable
                                       defaultOptions
                                       loadOptions={getCitiesData}
                                    />
                                 </LabelContainer>

                                 {errors.startAddress && <ErrorMessage error={errors.startAddress} />}

                                 <LabelContainer
                                    labelPosition={labelPosition}
                                    label="Destination:"
                                    showError={errors.endAddress}
                                 >
                                    <Select
                                       placeholder="e.g Tegel Airport"
                                       onChange={setFieldValue}
                                       value={values.endAddress}
                                       name="endAddress"
                                       isClearable
                                       defaultOptions
                                       loadOptions={getCitiesData}
                                    />
                                 </LabelContainer>

                                 {errors.endAddress && <ErrorMessage error={errors.endAddress} />}

                                 <DayPicker
                                    showError={errors.date}
                                    labelPosition={labelPosition}
                                    onChange={setFieldValue}
                                    value={values.date}
                                    name="date"
                                 />

                                 <LabelContainer
                                    labelPosition={labelPosition}
                                    label="Voucher code (optional):"
                                    showError={errors.voucherCode}
                                 >
                                    <Input
                                       autoComplete="off"
                                       name="voucherCode"
                                       value={values.voucherCode}
                                       onChange={setFieldValue}
                                    />
                                 </LabelContainer>

                                 {errors.voucherCode && <ErrorMessage error={errors.voucherCode} />}

                                 <div className={css['options-container']}>
                                    <span>For 1-2 passengers with 1-2 bags</span>
                                    <span className={css['more-options']}>more options</span>
                                    <div className={css.options}>
                                       <LabelContainer
                                          labelPosition="left"
                                          label={<PersonIcon className={css.icon} />}
                                          variant="dark"
                                       >
                                          <Select
                                             placeholder="2"
                                             onChange={setFieldValue}
                                             value={values.passengers}
                                             name="passengers"
                                             defaultOptions={options(1, 4)}
                                          />
                                       </LabelContainer>

                                       <LabelContainer
                                          labelPosition="left"
                                          label={<SuitcaseIcon className={css.icon} />}
                                          variant="dark"
                                       >
                                          <Select
                                             placeholder="2"
                                             onChange={setFieldValue}
                                             value={values.suitcase}
                                             name="suitcase"
                                             defaultOptions={options(0, 4)}
                                          />
                                       </LabelContainer>

                                       <LabelContainer
                                          labelPosition="left"
                                          label={<SportIcon className={css.icon} />}
                                          variant="dark"
                                       >
                                          <Select
                                             placeholder="0"
                                             onChange={setFieldValue}
                                             value={values.sportLuggage}
                                             name="sportLuggage"
                                             defaultOptions={options(0, 4)}
                                          />
                                       </LabelContainer>

                                       <LabelContainer
                                          labelPosition="left"
                                          label={<DogIcon className={css.icon} />}
                                          variant="dark"
                                       >
                                          <Select
                                             placeholder="0"
                                             onChange={setFieldValue}
                                             value={values.pets}
                                             name="pets"
                                             defaultOptions={options(0, 2)}
                                          />
                                       </LabelContainer>

                                       <LabelContainer
                                          labelPosition="left"
                                          label={<BabyIcon className={css.icon} />}
                                          variant="dark"
                                       >
                                          <Select
                                             placeholder="0"
                                             onChange={setFieldValue}
                                             value={values.childrenSeats}
                                             name="childrenSeats"
                                             defaultOptions={options(0, 2)}
                                          />
                                       </LabelContainer>
                                    </div>
                                 </div>
                                 <Button type="submit" loading={isSubmitting}>
                                    Start Booking
                                 </Button>
                              </div>
                           </form>
                           {!isFormEmpty && <BookingSummary formState={initialFormState} />}
                        </div>
                     );
                  }}
               </Formik>
            );
         }}
      </Media>
   );
}

FirstBookingStepForm.propTypes = {
   initialFormState: PropTypes.object.isRequired,
   onSubmit: PropTypes.func.isRequired,
   history: PropTypes.object.isRequired,
   isFormEmpty: PropTypes.bool.isRequired,
};
