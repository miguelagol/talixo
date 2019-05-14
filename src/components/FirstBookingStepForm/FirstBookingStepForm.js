import React from 'react';
import Media from 'react-media';
import { FaBaby as BabyIcon } from 'react-icons/fa';
import { FaDog as DogIcon } from 'react-icons/fa';
import { FaSuitcase as SuitcaseIcon } from 'react-icons/fa';
import { FaSkiingNordic as SportIcon } from 'react-icons/fa';
import { IoIosPerson as PersonIcon } from 'react-icons/io';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import Button from '../Button';
import LabelContainer from '../LabelContainer';
import Input from '../Input';
import Select from '../Select';
import DayPicker from '../DayPicker';
import ErrorMessage from '../ErrorMessage';
import css from './FirstBookingStepForm.module.scss';
import validator from './validator';

export default function FirstBookingStepForm({ initialFormState }) {
   return (
      <Media query="(max-width: 980px)">
         {matches => {
            const labelPosition = matches ? 'top' : 'left';

            return (
               <Formik
                  initialValues={initialFormState}
                  onSubmit={(values, { setSubmitting }) => {
                     setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                     }, 3000);
                  }}
                  validateOnChange={false}
                  validateOnBlur={false}
                  validate={validator}
               >
                  {props => {
                     // eslint-disable-next-line react/prop-types
                     const { values, errors, isSubmitting, handleSubmit, setFieldValue } = props;

                     return (
                        <form onSubmit={handleSubmit}>
                           {isSubmitting && <span>Submitting...</span>}

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
                                    defaultOptions={[
                                       { label: 'Kraków', value: 'kraków' },
                                       { label: 'Warszawa', value: 'warszawa' },
                                    ]}
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
                                    defaultOptions={[
                                       { label: 'Kraków', value: 'kraków' },
                                       { label: 'Warszawa', value: 'warszawa' },
                                    ]}
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
                                          defaultOptions={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
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
                                          defaultOptions={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
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
                                          defaultOptions={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
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
                                          defaultOptions={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
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
                                          defaultOptions={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
                                       />
                                    </LabelContainer>
                                 </div>
                              </div>
                              <Button type="submit">Start Booking</Button>

                              <DisplayFormikState {...props} />
                           </div>
                        </form>
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
};

const DisplayFormikState = props => (
   <div style={{ margin: '1rem 0', color: 'black' }}>
      <pre
         style={{
            background: '#f6f8fa',
            fontSize: '1rem',
            padding: '.5rem',
         }}
      >
         <strong>props</strong> = {JSON.stringify(props, null, 2)}
      </pre>
   </div>
);
