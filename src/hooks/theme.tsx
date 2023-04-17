import { useContext } from 'react';
import { ThemeActionContext, ThemeContext } from '../context/theme-context';

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useThemeActionContext = () => {
  return useContext(ThemeActionContext);
};
