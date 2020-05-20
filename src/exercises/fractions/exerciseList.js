const exerciseList = [
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

exerciseList.forEach((ex, idx) => {
  ex.key = idx;
});

export default exerciseList;
