const getRelevant = (search, values) => {
  return values
    .filter(value => value.toLowerCase().includes(search.toLowerCase()))
    .slice(0, Math.min(5, values.length));
};

export default getRelevant;
