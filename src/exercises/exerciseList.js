const exerciseList = [
  {
    name: 'Calculation with two numbers',
    filename: '1-2NumsCalc',
  },
  {
    name: 'Simplify Fractions',
    filename: '2-SimplifyFraction',
  },
  {
    name: 'Add and Subtract Fractions',
    filename: '3-AddSubFractions',
  },
  {
    name: 'Multiply Fractions',
    filename: '4-MultiplyFractions',
  },
  {
    name: 'Divide Fractions',
    filename: '5-DivideFractions',
  },
];

const exTest = [
  {
    name: 'Test',
    filename: '3-AddSubFractions',
  },
  {
    name: 'Test',
    filename: '3-AddSubFractions',
  },
  {
    name: 'Test',
    filename: '3-AddSubFractions',
  },
  {
    name: 'Test',
    filename: '3-AddSubFractions',
  },
  {
    name: 'Test',
    filename: '3-AddSubFractions',
  },
];

// exerciseList.push(...exTest);

exerciseList.forEach((el, idx) => {
  el.key = idx;
});

export { exerciseList };
