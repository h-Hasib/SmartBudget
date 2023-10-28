import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Field, Formik } from 'formik';
import { CheckCircle } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import RightArrowButtonWide from 'src/components/buttons/RightArrowButtonWide';
import { TextField } from 'src/components/inputs/TextField';
import commonStyles from 'src/constants/commonStyles';
import { textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import * as yup from 'yup';
interface Props {
  email: string;
}
const SetPasswordForm = ({ email }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleSubmit = (values: { password: string }) => {
    alert(`Account Created.\n\n\nemail: ${email}\npassword: ${values.password}`);
    navigation.navigate('LoginScreen');
  };
  const initialValues = {
    password: '',
    retypePassword: '',
  };
  const validationSchema = yup.object().shape({
    password: yup.string().min(4).max(11).required(i18n.t('PASSWORD_IS_A_REQUIRED_FIELD')),
    retypePassword: yup
      .string()
      .oneOf([yup.ref('password')], i18n.t('PASSWORD_MUST_MATCH'))
      .required(i18n.t('PLEASE_RETYPE_YOUR_PASSWORD')),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <>
          <Text style={[textStyles.regular12, { color: textStyles.secondaryTextColor.color }]}>
            {i18n.t('SET_PASSWORD')}
          </Text>
          <Field
            component={TextField}
            type="password"
            name="password"
            placeholder={`*******`}
            placeholderTextColor={textStyles.secondaryTextColor.color}
          />
          <Text
            style={[
              textStyles.regular12,
              { color: textStyles.secondaryTextColor.color },
              { marginBottom: 30 },
            ]}>
            {i18n.t('PASSWORD_STRENGTH')}
            {`  -- -- --`}
          </Text>

          <Text style={[textStyles.regular12, { color: textStyles.secondaryTextColor.color }]}>
            {i18n.t('RETYPE_PASSWORD')}
          </Text>

          <Field
            component={TextField}
            type="password"
            name="retypePassword"
            placeholder={`*******`}
            placeholderTextColor={textStyles.secondaryTextColor.color}
          />

          <View style={[commonStyles.rowStart, { marginBottom: 25 }]}>
            <Text style={[textStyles.regular12, { color: textStyles.secondaryTextColor.color }]}>
              {i18n.t('PASSWORD_MATCH')}
            </Text>
            <CheckCircle size={21} color="green" weight={'fill'} />
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginTop: '5%',
              marginBottom: 50,
            }}>
            <RightArrowButtonWide
              btnLabel="CREATE_ACCOUNT"
              mode="contained"
              onPress={() => handleSubmit()}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default SetPasswordForm;
