import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik, FormikProps } from 'formik';
import { PencilSimple } from 'phosphor-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import RightArrowButtonWide from 'src/components/buttons/RightArrowButtonWide';
import Header from 'src/components/common/Header';
import AppContainer from 'src/components/containers/AppContainer';
import { colors, theme } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import * as yup from 'yup';

type Props = {
  route: RouteProp<RootStackParamList, 'ForgotPasswordOtpScreen'>;
};
interface FormValues {
  otp: string;
}
const validationSchema = yup.object().shape({
  otp: yup.string().length(4, i18n.t('OTP_MUST_BE_4_DIGITS')).required(i18n.t('OTP_IS_REQUIRED')),
});
const initialValues: FormValues = {
  otp: '',
};

const ForgotPasswordOtpScreen = ({ route }: Props) => {
  const [email] = useState<string>(route.params?.email);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const handleSubmit = (values: FormValues) => {
    try {
      Alert.alert(values.otp);
      navigation.navigate('ResetPasswordScreen', { email: email });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleBackScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
    return true;
  };

  useEffect(() => {
    formikRef.current?.resetForm();
  }, []);

  return (
    <AppContainer styleProp={{ padding: 25 }} scrollable={true}>
      <Header styleProp={{ height: '10%' }} onPress={handleBackScreen} />
      <View style={{ height: '90%', marginTop: 20 }}>
        <Text style={[textStyles.semiBold24, textStyles.primaryTextColor, { marginBottom: 10 }]}>
          {i18n.t('VERIFICATION_CODE')}
        </Text>
        <Text style={[textStyles.regular14, textStyles.secondaryTextColor]}>
          {i18n.t('ENTER_THE_4_DIGIT_VERIFICATION_CODE')}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginVertical: 20,
            marginTop: 45,
          }}>
          <Text style={[textStyles.medium16, { color: colors.primary }]}>{email}</Text>
          <PencilSimple size={22} color={colors.primary} />
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          innerRef={formikRef}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View>
              <OTPTextView
                handleTextChange={handleChange('otp')}
                defaultValue={values.otp}
                autoFocus={true}
                tintColor={colors.primary}
                offTintColor={theme === 'dark' ? colors.dark.grey3 : colors.light.grey3}
                textInputStyle={styles.roundedTextInput}
                inputCount={4}
                keyboardType="numeric"
              />
              {touched.otp && errors.otp && (
                <Text style={{ color: 'tomato', marginVertical: 10 }}>{errors.otp}</Text>
              )}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  marginBottom: 60,
                  marginTop: 30,
                }}>
                <RightArrowButtonWide
                  btnLabel="SUBMIT_CODE"
                  mode="contained"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </AppContainer>
  );
};

export default ForgotPasswordOtpScreen;

const styles = StyleSheet.create({
  roundedTextInput: {
    color: theme === 'dark' ? colors.dark.white : colors.light.black,
    borderRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 1,
    height: 65,
    width: 65,
    elevation: 5,
    backgroundColor: theme === 'dark' ? colors.dark.reverseWhite : colors.light.white,
  },
});
