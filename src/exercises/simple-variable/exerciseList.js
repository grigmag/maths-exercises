const exerciseList = [
  {
    name: 'Variables and numbers',
    filename: 'varSimple',
  },
  {
    name: 'Add monomials',
    filename: 'addMonomials',
  },
  {
    name: 'Multiply monomials',
    filename: 'multiplyMonomials',
  },
  {
    name: 'Divide monomials',
    filename: 'divideMonomials',
  },
];

exerciseList.forEach((ex, idx) => {
  ex.key = idx;
});

export default exerciseList;
