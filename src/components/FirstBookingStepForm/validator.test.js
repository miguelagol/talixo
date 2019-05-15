import validator from './validator';

test('should return errors for all required fields ', () => {
   const initialValues = { voucherCode: '#pleaseHireMe' };

   const expected = {
      startAddress: 'This field is required',
      endAddress: 'This field is required',
   };

   expect(validator(initialValues)).toStrictEqual(expected);
});

test('should return correct error for invalid voucherCode value', () => {
   const initialValues = { startAddress: 'Alaska', endAddress: 'Alabama', voucherCode: 'xyz' };

   const expected = {
      voucherCode: 'Invalid voucher code',
   };

   expect(validator(initialValues)).toStrictEqual(expected);
});

test('should return correct error for the same startAddress and endAddress values', () => {
   const initialValues = { startAddress: 'Alaska', endAddress: 'Alaska', voucherCode: '#iWillDoMyBest' };

   const expected = {
      startAddress: 'Change the starting address. (It must be different from the final one)',
      endAddress: 'Change the final address. (It must be different from the starting one)',
   };

   expect(validator(initialValues)).toStrictEqual(expected);
});
