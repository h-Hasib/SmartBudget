import { ArrowRight } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { bgColor } from 'src/constants/commonStyles';
import i18n from 'src/languages/i18n';
interface ButtonProps {
  btnLabel: string;
  mode: 'outlined' | 'contained';
  onPress: () => void;
  styleProp?: ViewStyle;
}
const RightArrowButtonWide = ({ btnLabel, mode, onPress, styleProp }: ButtonProps) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      contentStyle={styles.content}
      style={[mode === 'outlined' ? styles.outlinedButton : styles.containedButton, styleProp]}
      labelStyle={mode === 'outlined' ? styles.outlinedLabel : styles.containedLabel}
      icon={({ color }) => <ArrowRight size={24} color={color} />}>
      {i18n.t(btnLabel)}
    </Button>
  );
};

export default RightArrowButtonWide;

const styles = StyleSheet.create({
  containedButton: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#2E64EF',
  },
  outlinedButton: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: bgColor,
    borderColor: '#2E64EF',
  },
  content: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  containedLabel: {
    paddingVertical: 8,
    fontSize: 18,
  },
  outlinedLabel: {
    paddingVertical: 8,
    fontSize: 20,
    color: '#2E64EF',
  },
});
