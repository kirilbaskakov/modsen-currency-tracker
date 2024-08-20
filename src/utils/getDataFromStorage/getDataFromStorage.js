const getDataFromStorage = (currency, defaultItem) => {
  try {
    const data = JSON.parse(localStorage.getItem(currency)).map(
      ({ x, ...other }) => ({ x: new Date(x), ...other })
    );
    return data ?? [defaultItem];
  } catch {
    return [defaultItem];
  }
};

export default getDataFromStorage;
