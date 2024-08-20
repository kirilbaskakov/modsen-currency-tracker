const tooltipTitle = items => {
  const { x } = items[0].raw;
  const date = new Date(x).toLocaleDateString();
  return date;
};

const tooltipBody = items => {
  const { o, c, h, l } = items[0].raw;
  return `Open: ${o}\nClosed: ${c}\nHigh: ${h}\nLow: ${l}`;
};

export default {
  intersect: false,
  callbacks: {
    title: tooltipTitle,
    beforeBody: tooltipBody,
    label: () => ''
  }
};
