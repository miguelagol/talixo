import validator from './validator';

test('should return errors for all required fields ', () => {
   const initialValues = { voucherCode: 'talixo' };

   const expected = {
      startAddress: 'This field is required',
      endAddress: 'This field is required',
   };

   expect(validator(initialValues)).toStrictEqual(expected);
});

test('should return correct error for invalid voucherCode value', () => {
   const initialValues = { startAddress: 'xyz', endAddress: 'xyz', voucherCode: 'xyz' };

   const expected = {
      voucherCode: 'Invalid voucher code',
   };

   expect(validator(initialValues)).toStrictEqual(expected);
});
