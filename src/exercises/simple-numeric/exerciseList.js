const exerciseList = [
  {
    name: 'Calculation with two numbers',
    filename: '2NumsCalc',
  },
];

exerciseList.forEach((ex, idx) => {
  ex.key = idx;
});

export default exerciseList;
