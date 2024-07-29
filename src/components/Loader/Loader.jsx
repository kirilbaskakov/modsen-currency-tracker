import React, { useEffect, useState } from 'react';
import { LoaderStyled } from './styled';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timerId = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timerId);
  }, []);

  if (!isVisible) {
    return null;
  }

  return <LoaderStyled />;
};

export default Loader;
