import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from 'src/constants/colors';
import { bgColor } from 'src/constants/commonStyles';
import { textStyles } from 'src/constants/textStyles';

interface ButtonProps {
  btnLabel: string;
  onPress: () => void;
  icon?: React.ReactNode;
}
const ExternalLoginButton = ({ btnLabel, onPress, icon }: ButtonProps) => {
  return (
    <Button
      mode={'outlined'}
      onPress={onPress}
      contentStyle={styles.content}
      style={styles.outlinedButton}
      labelStyle={[styles.outlinedLabel, textStyles.semiBold16, { color: colors.grey1 }]}
      icon={() => icon}>
      {btnLabel}
    </Button>
  );
};

export default ExternalLoginButton;

const styles = StyleSheet.create({
  outlinedButton: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: bgColor,
    borderColor: colors.grey1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outlinedLabel: {
    paddingVertical: 3,
    fontSize: 20,
  },
});
