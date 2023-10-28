import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { default as React, useCallback } from 'react';
import { BackHandler, View } from 'react-native';
import { Text } from 'react-native-paper';
import AppleIcon from 'src/assets/svg/external-login/AppleIcon';
import FacebookIcon from 'src/assets/svg/external-login/FacebookIcon';
import GoogleIcon from 'src/assets/svg/external-login/GoogleIcon';
import ExternalLoginButton from 'src/components/buttons/ExternalLoginButton';
import AppContainer from 'src/components/containers/AppContainer';
import { colors, theme } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import { closeApp } from 'src/services/common.service';
import LoginForm from './LoginForm';

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  //Handles the effect of pressing Hardware Back button
  const route = useRoute();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'LoginScreen') {
          closeApp();
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );
  return (
    <AppContainer styleProp={{ padding: 25 }} scrollable={true}>
      <View style={{ marginTop: 40 }}>
        <Text style={[textStyles.semiBold24, textStyles.primaryTextColor]}>
          {i18n.t('WELCOME_BACK')}
        </Text>
        <Text style={[textStyles.regular14, { color: textStyles.secondaryTextColor.color }]}>
          {i18n.t('LETS_LOGIN_TO_YOUR_ACCOUNT')}
        </Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <LoginForm />

        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={[textStyles.medium14, { color: colors.grey1, marginVertical: 20 }]}>
            {i18n.t('OR_LOGIN_WITH')}
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
              { color: textStyles.secondaryTextColor.color, marginTop: 25, marginBottom: '25%' },
            ]}>
            {i18n.t('NEW_HERE')}{' '}
            <Text
              style={[textStyles.semiBold16, { color: colors.primary, marginBottom: 50 }]}
              onPress={() => navigation.navigate('EmailSetupScreen')}>
              {i18n.t('SIGN_UP')}
            </Text>
          </Text>
        </View>
      </View>
    </AppContainer>
  );
};

export default LoginScreen;
