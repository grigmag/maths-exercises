const exerciseList = [
  {
    name: 'Simplify Fractions',
    filename: 'SimplifyFractions',
  },
  {
    name: 'Add and Subtract Fractions',
    filename: 'AddSubFractions',
  },
  {
    name: 'Multiply Fractions',
    filename: 'MultiplyFractions',
  },
  {
    name: 'Divide Fractions',
    filename: 'DivideFractions',
  },
];

exerciseList.forEach((ex, idx) => {
  ex.key = idx;
});

export default exerciseList;
