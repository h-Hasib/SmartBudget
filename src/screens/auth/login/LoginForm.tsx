import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Field, Formik } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import RightArrowButtonWide from 'src/components/buttons/RightArrowButtonWide';
import { TextField } from 'src/components/inputs/TextField';
import { colors } from 'src/constants/colors';
import { placeHolderTextColor, textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import * as yup from 'yup';
const LoginForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  interface formValueProps {
    email: string;
    password: string;
  }
  const handleSubmit = (values: formValueProps) => {
    const { email, password } = values;
    alert(`Login success\nemail: ${email}\npassword: ${password}`);
    navigation.navigate('WelcomeSuccessScreen');
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email(i18n.t('EMAIL_MUST_BE_VALID'))
          .required(i18n.t('EMAIL_IS_REQUIRED')),
        password: yup.string().min(4).max(11).required(i18n.t('PASSWORD_IS_A_REQUIRED_FIELD')),
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

          <Text
            style={[
              textStyles.regular12,
              { color: textStyles.secondaryTextColor.color, marginTop: 15 },
            ]}>
            {i18n.t('PASSWORD')}
          </Text>
          <Field
            component={TextField}
            type="password"
            name="password"
            placeholder={`*******`}
            placeholderTextColor={textStyles.secondaryTextColor.color}
          />

          <View
            style={{
              marginTop: 15,
              marginBottom: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[textStyles.semiBold14, { color: colors.primary }]}
              onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              {i18n.t('FORGOT_PASSWORD')}
            </Text>
            {/* <Text
              style={[textStyles.semiBold14, { color: colors.primary }]}
              onPress={() => navigation.navigate('WelcomeSuccessScreen')}>
              {i18n.t('First_Login')}
            </Text> */}
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <RightArrowButtonWide
              btnLabel="LOGIN"
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
