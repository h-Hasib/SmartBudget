import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import RightArrowButtonWide from 'src/components/buttons/RightArrowButtonWide';
import Header from 'src/components/common/Header';
import AppContainer from 'src/components/containers/AppContainer';
import { textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
type Props = {
  route: RouteProp<RootStackParamList, 'CheckVerificationScreen'>;
};

const CheckVerificationScreen = ({ route }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const email = route.params?.email;

  return (
    <AppContainer styleProp={{ padding: 25 }} scrollable={false}>
      <Header
        styleProp={{ height: '10%' }}
        onPress={() => navigation.navigate('SendVerificationScreen', { email: email })}
      />
      <View style={{ height: '90%' }}>
        <Text style={[textStyles.semiBold24, textStyles.primaryTextColor, { marginBottom: 10 }]}>
          {i18n.t('VERIFY_YOUR_EMAIL_ADDRESS')}
        </Text>
        <Text style={[textStyles.regular14, textStyles.secondaryTextColor]}>
          {i18n.t('WE_HAVE_SENT_A_CODE_TO')}
          {'\n'}
          <Text style={[textStyles.regular16, textStyles.secondaryTextColor]}>{email}</Text>
          {'\n'}
          {i18n.t('PLEASE_VERIFY_EMAIL_WITH_PROVIDED_OTP')}
        </Text>
        <View style={styles.btnContainer}>
          <RightArrowButtonWide
            btnLabel="CHECK_INBOX"
            mode="contained"
            onPress={() => alert('Check Your Email Inbox')}
          />
          <View style={{ marginBottom: 25 }}></View>
          <RightArrowButtonWide
            btnLabel="RESEND_VERIFICATION_CODE"
            mode="outlined"
            onPress={() => alert('Verification code resend successful.')}
          />
          <View style={{ marginBottom: 25 }}></View>
          <RightArrowButtonWide
            btnLabel="CONTINUE"
            mode="contained"
            onPress={() =>
              navigation.navigate('EmailSetupOtpScreen', {
                email: email,
              })
            }
          />
        </View>
      </View>
    </AppContainer>
  );
};

export default CheckVerificationScreen;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginTop: '25%',
  },
});
