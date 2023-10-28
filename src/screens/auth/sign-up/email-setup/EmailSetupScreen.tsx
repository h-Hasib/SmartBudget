import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View } from 'react-native';
import AppleIcon from 'src/assets/svg/external-login/AppleIcon';
import FacebookIcon from 'src/assets/svg/external-login/FacebookIcon';
import GoogleIcon from 'src/assets/svg/external-login/GoogleIcon';
import ExternalLoginButton from 'src/components/buttons/ExternalLoginButton';
import AppContainer from 'src/components/containers/AppContainer';
import { colors, theme } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import EmailSetupForm from './EmailSetupForm';
function EmailSetupScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <AppContainer styleProp={{ padding: 25 }} scrollable={true}>
      <View style={{ marginTop: 40 }}>
        <Text style={[textStyles.semiBold24, textStyles.primaryTextColor]}>
          {i18n.t('WHATS_YOUR_EMAIL')}
        </Text>
        <Text style={[textStyles.regular14, { color: textStyles.secondaryTextColor.color }]}>
          {i18n.t('WE_WILL_CHECK_IF_YOU_HAVE_AN_ACCOUNT')}
        </Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <Text style={[textStyles.regular12, { color: textStyles.secondaryTextColor.color }]}>
          {i18n.t('EMAIL_ADDRESS')}
        </Text>

        <EmailSetupForm />

        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={[textStyles.medium14, { color: colors.grey1, marginVertical: 30 }]}>
            {i18n.t('OR_SIGN_UP_WITH')}
          </Text>
          <ExternalLoginButton
            btnLabel="Facebook"
            icon={<FacebookIcon width={25} height={25} color={'#1877F2'} />}
            onPress={() => alert('Login with Facebook')}
          />
          <View style={{ marginBottom: 15 }}></View>

          <ExternalLoginButton
            btnLabel="Google"
            icon={<GoogleIcon width={27} height={27} />}
            onPress={() => alert('Login with Google')}
          />
          <View style={{ marginBottom: 15 }}></View>
          <ExternalLoginButton
            btnLabel="Apple"
            icon={
              <AppleIcon
                width={27}
                height={27}
                color={theme === 'dark' ? colors.dark.white : colors.light.black}
              />
            }
            onPress={() => alert('Login with Apple')}
          />
          <Text
            style={[
              textStyles.medium14,
              { color: textStyles.secondaryTextColor.color, marginVertical: 60 },
            ]}>
            {i18n.t('ALREADY_HAVE_AN_ACCOUNT')}
            <Text
              style={[textStyles.semiBold16, { color: colors.primary }]}
              onPress={() => navigation.navigate('LoginScreen')}>
              {i18n.t('LOGIN')}
            </Text>
          </Text>
        </View>
      </View>
    </AppContainer>
  );
}

export default EmailSetupScreen;
