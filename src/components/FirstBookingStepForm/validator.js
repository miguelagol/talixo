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

   if (values.startAddress === values.endAddress && values.startAddress && values.endAddress) {
      errors.startAddress = 'Change the starting address. (It must be different from the final one)';
      errors.endAddress = 'Change the final address. (It must be different from the starting one)';
   }

   return errors;
}
