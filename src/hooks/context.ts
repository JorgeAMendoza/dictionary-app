import { useContext } from 'react';
import { FontActionContext, FontContext } from '../context/font-context';

export const useFontContext = () => {
  return useContext(FontContext);
};

export const useFontActionContext = () => {
  return useContext(FontActionContext);
};
