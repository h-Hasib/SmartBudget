import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Field, Formik } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import RightArrowButtonWide from 'src/components/buttons/RightArrowButtonWide';
import { TextField } from 'src/components/inputs/TextField';
import { placeHolderTextColor, textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import * as yup from 'yup';
const LoginForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  interface formValueProps {
    email: string;
  }
  const handleSubmit = (values: formValueProps) => {
    const { email } = values;
    navigation.navigate('ForgotPasswordOtpScreen', {
      email: email,
    });
  };
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email(i18n.t('EMAIL_MUST_BE_VALID'))
          .required(i18n.t('EMAIL_IS_REQUIRED')),
      })}
      onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <>
          <Text style={[textStyles.regular12, { color: textStyles.secondaryTextColor.color }]}>
            {i18n.t('EMAIL_ADDRESS')}
          </Text>
          <Field
            component={TextField}
            name="email"
            type="email"
            placeholder="ex; johndoe@gmail.com"
            placeholderTextColor={placeHolderTextColor}
          />

          <View
            style={{
              flexDirection: 'column',
              marginVertical: 50,
              justifyContent: 'flex-end',
            }}>
            <RightArrowButtonWide
              btnLabel={'SEND_VERIFICATION_CODE'}
              mode="contained"
              onPress={() => handleSubmit()}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
