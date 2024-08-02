const getChartData = (amount, startDate) => {
  const data = new Array(amount).fill({}).reduce((data, _, index) => {
    let date = new Date(startDate);
    date.setDate(startDate.getDate() + index);

    const offset = Math.random() * 100;

    const item = {
      x: date
    };
    item.o = data.length ? data.at(-1).c : +(Math.random() + offset).toFixed(2);
    item.c = +(item.o + Math.random() - 0.5).toFixed(2);
    item.l = +(Math.min(item.o, item.c) - Math.random() * 0.3).toFixed(2);
    item.h = +(Math.max(item.o, item.c) + Math.random() * 0.3).toFixed(2);
    return [
      ...data,
      {
        ...item,
        s: [item.o, item.c]
      }
    ];
  }, []);
  return data;
};

export default getChartData;
