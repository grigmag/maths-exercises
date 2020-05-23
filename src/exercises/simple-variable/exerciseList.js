const exerciseList = [
  {
    name: 'Variables and numbers',
    filename: 'varSimple',
  },
  {
    name: 'Add monomials',
    filename: 'addMonomials',
  },
];

exerciseList.forEach((ex, idx) => {
  ex.key = idx;
});

export default exerciseList;
