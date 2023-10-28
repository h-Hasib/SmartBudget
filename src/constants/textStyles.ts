import { StyleSheet, TextStyle } from 'react-native';
import { colors, theme } from './colors';
import { typography } from './typography';

const REGULAR: TextStyle = {
  fontFamily: typography.PoppinsRegular,
  color: colors.black,
};
const MEDIUM: TextStyle = {
  fontFamily: typography.PoppinsMedium,
  color: colors.black,
};
const SemiBold: TextStyle = {
  fontFamily: typography.PoppinsSemiBold,
  color: colors.black,
};
const BOLD: TextStyle = {
  fontFamily: typography.PoppinsBold,
  color: colors.black,
};

export const textStyles = StyleSheet.create({
  regular: REGULAR,
  bold: BOLD,
  medium: MEDIUM,
  semiBold: SemiBold,

  semiBold30: {
    ...SemiBold,
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 45,
  },
  semiBold24: {
    ...SemiBold,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 33.6,
  },
  semiBold20: {
    ...SemiBold,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  medium20: {
    ...MEDIUM,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
  },
  regular20: {
    ...REGULAR,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
  },
  semiBold16: {
    ...SemiBold,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22.4,
  },
  regular16: {
    ...REGULAR,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 23,
  },
  semiBold14: {
    ...SemiBold,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  medium14: {
    ...MEDIUM,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22.4,
  },
  regular14: {
    ...REGULAR,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22.4,
  },
  semiBold12: {
    ...SemiBold,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.8,
  },
  medium10: {
    ...MEDIUM,
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 18,
  },
  medium12: {
    ...MEDIUM,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  medium16: {
    ...MEDIUM,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22.4,
  },
  regular12: {
    ...REGULAR,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  primaryTextColor: {
    color: theme === 'dark' ? colors.dark.white : colors.light.black,
  },
  secondaryTextColor: {
    color: theme === 'dark' ? colors.dark.grey1 : colors.light.grey1,
  },
});

export let placeHolderTextColor = '';
placeHolderTextColor = theme === 'dark' ? colors.dark.grey2 : colors.light.grey2;
