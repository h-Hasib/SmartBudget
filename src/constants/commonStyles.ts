import { StyleSheet } from 'react-native';
import { colors, theme } from './colors';

export default StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export const containerStyles = StyleSheet.create({
  bgColor: {
    backgroundColor: theme === 'dark' ? colors.dark.secondary : colors.light.secondary,
  },
});

export let bgColor = '';
bgColor = theme === 'dark' ? colors.dark.secondary : colors.light.secondary;
