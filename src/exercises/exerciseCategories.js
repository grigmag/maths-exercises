const exerciseCategories = [
  {
    title: 'Simple Calculations',
    folder: 'simple-numeric',
  },
  {
    title: 'Fractions',
    folder: 'fractions',
  },
  {
    title: 'Simple Variable Calculations',
    folder: 'simple-variable',
  },
];

exerciseCategories.forEach((cat, idx) => {
  cat.key = idx;
});

export default exerciseCategories;
