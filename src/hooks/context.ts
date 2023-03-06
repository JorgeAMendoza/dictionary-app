import { useContext } from 'react';
import { FontContext } from '../context/font-context';

export const useFontContext = () => {
  return useContext(FontContext);
};
