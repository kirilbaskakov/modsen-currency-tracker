import getDataFromStorage from './getDataFromStorage';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

test('get default item', () => {
  localStorage.removeItem('testCurrency');
  expect(getDataFromStorage('testCurrency', 100)).toEqual([100]);
});

test('get item from storage', () => {
  localStorage.setItem(
    'testCurrency',
    JSON.stringify([
      { x: 10, l: 5, o: 10 },
      { x: 20, l: 15, o: 20 },
      { x: 30, l: 45, o: 30 }
    ])
  );
  expect(getDataFromStorage('testCurrency', 100)).toEqual([
    { x: new Date(10), l: 5, o: 10 },
    { x: new Date(20), l: 15, o: 20 },
    { x: new Date(30), l: 45, o: 30 }
  ]);
  localStorage.removeItem('testCurrency');
});
