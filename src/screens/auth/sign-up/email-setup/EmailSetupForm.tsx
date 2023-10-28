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

const EmailSetupForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleSubmit = (values: { email: string }) => {
    navigation.navigate('SendVerificationScreen', { email: values.email });
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
          <Field
            component={TextField}
            disable={false}
            multiline={false}
            name="email"
            type="email"
            placeholder="ex: johndoe@xmail.com"
            placeholderTextColor={placeHolderTextColor}
          />

          <View style={{ marginTop: 10, marginBottom: 30 }}>
            <Text style={[textStyles.medium14, { color: textStyles.secondaryTextColor.color }]}>
              {i18n.t('USER_AGREEMENT')}
              <Text
                style={[textStyles.semiBold14, { color: colors.primary }]}
                onPress={() => alert('There will be "Terms & Condition" placed here')}>
                {i18n.t('TERMS_AND_CONDITIONS')}
              </Text>{' '}
              {i18n.t('AND')}
              <Text
                style={[textStyles.semiBold14, { color: colors.primary }]}
                onPress={() => alert('There will be "Privacy Policy" placed here')}>
                {i18n.t('PRIVACY_POLICY')}
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <RightArrowButtonWide
              btnLabel={'CONTINUE'}
              mode="contained"
              onPress={() => handleSubmit()}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default EmailSetupForm;
