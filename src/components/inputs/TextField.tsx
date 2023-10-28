// import Clipboard from 'expo-clipboard';
import { FieldProps } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { colors, theme } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';

interface CustomTextInputProps extends FieldProps {
  label?: string;
  icon?: React.ReactNode;
  type?: 'default' | 'email' | 'password';
  mode?: 'flat' | 'outlined';
  placeholder?: string;
  placeholderTextColor?: string;
  disable?: boolean;
  multiline?: boolean;
  [x: string]: any; // for other props
}

export const TextField: React.FC<CustomTextInputProps> = ({
  label,
  icon,
  type,
  form,
  field,
  placeholder,
  placeholderTextColor,
  mode = 'outlined',
  disable = false,
  multiline = false,
}) => {
  const [touched, setTouched] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);
  const { name, value, onBlur, onChange } = field;
  const { touched: touchedFields, errors } = form;
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  React.useEffect(() => {
    if (touchedFields[name]) {
      setTouched(true);
      setError(errors[name] as string | undefined);
    }
  }, [touchedFields, errors, name]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevVisible => !prevVisible);
  };

  return (
    <View style={{ marginVertical: 5 }}>
      {label && <Text>{label}</Text>}
      <TextInput
        style={styles.inputControl}
        placeholder={placeholder}
        selectionColor={colors.grey3}
        outlineColor={theme === 'dark' ? colors.dark.grey3 : colors.light.grey3}
        activeOutlineColor={colors.primary}
        textColor={textStyles.primaryTextColor.color}
        placeholderTextColor={placeholderTextColor}
        disabled={disable}
        mode={mode}
        value={value}
        onChangeText={onChange(name)}
        onBlur={() => {
          onBlur(name);
          setTouched(true);
        }}
        theme={{
          roundness: 10,
        }}
        secureTextEntry={type === 'password' && !isPasswordVisible}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        multiline={multiline}
        editable={true}
        right={
          type === 'password' ? (
            <TextInput.Icon
              icon={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              onPress={togglePasswordVisibility}
              forceTextInputFocus={true}
              size={21}
              color={textStyles.primaryTextColor.color}
            />
          ) : type === 'email' ? (
            <TextInput.Icon
              icon={'email-outline'}
              color={textStyles.primaryTextColor.color}
              forceTextInputFocus={true}
              size={21}
            />
          ) : icon ? (
            <TextInput.Icon icon={() => icon} />
          ) : null
        }
      />
      {touched && error && (
        <HelperText style={{ color: 'tomato' }} type="error">
          {error}
        </HelperText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputControl: {
    paddingBottom: 5,
    textAlignVertical: 'center',
    backgroundColor: theme === 'dark' ? colors.dark.reverseWhite : colors.light.white,
  },
});
