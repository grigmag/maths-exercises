const exerciseList = [
  {
    name: 'Variables and numbers',
    filename: 'varSimple',
  },
];

exerciseList.forEach((ex, idx) => {
  ex.key = idx;
});

export default exerciseList;
