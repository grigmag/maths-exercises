const exerciseList = [
  {
    name: 'Add and multiply variables',
    filename: 'varAddMult',
  },
];

exerciseList.forEach((ex, idx) => {
  ex.key = idx;
});

export default exerciseList;
