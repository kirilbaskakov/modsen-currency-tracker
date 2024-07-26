import { createContext, useEffect, useState } from 'react';
import genChartData from '../utiils/genChartData';
import addDays from '../utiils/addDays';
import Observable from './Observable';

export const DataContext = createContext(null);

export const DataProvider = ({ currency, children }) => {
  const getDefaultValue = () => {
    const defaultValue = [
      {
        x: new Date(),
        o: 0,
        c: 0,
        l: 0,
        h: 0
      }
    ];

    try {
      const data = JSON.parse(localStorage.getItem(currency)).map(
        ({ x, ...other }) => ({ x: new Date(x), ...other })
      );
      return data ?? defaultValue;
    } catch {
      return defaultValue;
    }
  };

  const [data, setData] = useState(getDefaultValue());

  useEffect(() => {
    const data = getDefaultValue();
    setData(data);
    Observable.notify(data);
  }, [currency]);

  const createItem = lastDate => {
    return {
      x: addDays(lastDate, 1),
      o: 0,
      c: 0,
      l: 0,
      h: 0
    };
  };

  const addItem = () => {
    setData(data => [...data, createItem(data.at(-1).x)]);
  };

  const updateDate =
    date =>
    ({ x, ...other }, index) => ({
      ...other,
      x: new Date(new Date(date).setDate(date.getDate() + index))
    });

  const deleteItem = id => {
    if (data.length == 1) {
      return;
    }
    const startDate = data[0].x;
    setData(data.filter(item => item.x !== id).map(updateDate(startDate)));
  };

  const changeItem = (id, key) => {
    setData(data =>
      data.map(item =>
        item.x === id ? { ...item, [key]: e.target.value } : item
      )
    );
  };

  const clear = () => {
    setData(data => [
      {
        x: data[0].x,
        o: 0,
        c: 0,
        l: 0,
        h: 0
      }
    ]);
  };

  const changeDate = date => {
    setData(data => data.map(updateDate(date)));
  };

  const randomize = () => {
    setData(data => genChartData(data.length, data[0].x));
  };

  const changeAmount = amount => {
    if (amount < data.length) {
      setData(data.slice(0, amount));
    } else {
      setData(
        data.concat(
          new Array(amount - data.length)
            .fill({})
            .map((_, index) => createItem(addDays(data.at(-1).x, index)))
        )
      );
    }
  };

  const save = () => {
    localStorage.setItem(currency, JSON.stringify(data));
    Observable.notify(data);
  };

  const value = {
    data,
    currency,
    addItem,
    deleteItem,
    changeItem,
    clear,
    changeDate,
    randomize,
    changeAmount,
    save
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
