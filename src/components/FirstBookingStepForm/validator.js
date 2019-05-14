import * as yup from 'yup';

export default function validator(values) {
   let errors = {};

   if (!values.startAddress) {
      errors.startAddress = 'This field is required';
   }

   if (!values.endAddress) {
      errors.endAddress = 'This field is required';
   }

   if (
      !yup
         .mixed()
         .oneOf(['#pleaseHireMe', '#iWillDoMyBest', ''])
         .isValidSync(values.voucherCode)
   ) {
      errors.voucherCode = 'Invalid voucher code';
   }
   return errors;
}
