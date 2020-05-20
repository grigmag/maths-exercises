const exerciseCategories = [
  {
    title: 'Simple Calculations',
    folder: 'simple-numeric',
  },
  {
    title: 'Fractions',
    folder: 'fractions',
  },
];

exerciseCategories.forEach((cat, idx) => {
  cat.key = idx;
});

export default exerciseCategories;
