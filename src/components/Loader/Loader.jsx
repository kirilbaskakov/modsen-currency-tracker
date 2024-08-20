import React, { useEffect, useState } from 'react';

import { LoaderStyled } from './styled';

function Loader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timerId);
  }, []);

  if (!isVisible) {
    return null;
  }

  return <LoaderStyled />;
}

export default Loader;
