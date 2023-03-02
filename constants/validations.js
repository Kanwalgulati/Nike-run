//@ Helper Function for Validation of metric value
export const validateInput = input => {
  //@ The Distance should have any number of digits from 0-9 . One or Zero decimal point. One or zero numner(digit) after the decimal point
  var rgx = /^[0-9]{1,}*\.?[0-9]?$/;
  return input.match(rgx);
};
