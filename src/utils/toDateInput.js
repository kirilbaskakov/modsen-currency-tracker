const toDateInput = date => {
  const res = date.toLocaleDateString('en-gb').split('/');
  res.reverse();
  return res.join('-');
};

export default toDateInput;
