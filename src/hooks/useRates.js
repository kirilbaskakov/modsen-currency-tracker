import { useEffect, useState } from 'react';

const useRates = baseCode => {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);

  const fetchRates = async () => {
    const url = `https://api.currencyapi.com/v3/latest?base_currency=${baseCode}`;
    const cache = await caches.open('currencies-cache');

    const cachedResponse = await cache.match(url);

    if (cachedResponse) {
      const expiresValue = cachedResponse.headers.get('expires');
      const dateValue = cachedResponse.headers.get('date');
      const maxAge = 300000;
      const exp =
        expiresValue && expiresValue !== '-1'
          ? Date.parse(expiresValue)
          : Date.parse(dateValue ?? '') + maxAge;

      if (Date.now() < exp) {
        const data = await cachedResponse.json();
        setData(data);
        return;
      }

      cache.delete(url);
    }

    fetch(url, {
      headers: {
        apikey: 'cur_live_czo7PpzJVlCwrYQSFJzUXB9L6y2K0LONWLVrR8bv'
      }
    }).then(async res => {
      const cloned = res.clone();

      const headers = new Headers([...cloned.headers.entries()]);
      headers.set('date', new Date().toUTCString());

      const { body, ...rest } = res;

      await cache.put(
        url,
        new Response(body, {
          ...rest,
          headers
        })
      );

      const data = await cloned.json();
      setData(data);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchRates().finally(() => setIsLoading(false));
  }, [baseCode]);

  return { rates: data.data, meta: data.meta, isLoading };
};

export default useRates;
