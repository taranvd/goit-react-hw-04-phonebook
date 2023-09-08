import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaulValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaulValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
