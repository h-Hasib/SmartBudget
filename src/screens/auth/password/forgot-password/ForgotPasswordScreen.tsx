import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { default as React } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Header from 'src/components/common/Header';
import AppContainer from 'src/components/containers/AppContainer';
import { textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <AppContainer styleProp={{ padding: 25 }} scrollable={true}>
      <Header styleProp={{ height: '10%' }} onPress={() => navigation.navigate('LoginScreen')} />
      <View style={{ height: '90%', marginTop: 20 }}>
        <Text style={[textStyles.semiBold24, textStyles.primaryTextColor]}>
          {i18n.t('FORGOT_PASSWORD')}
        </Text>
        <Text
          style={[
            textStyles.regular14,
            { color: textStyles.secondaryTextColor.color, marginTop: 10 },
          ]}>
          {i18n.t('ENTER_YOUR_EMAIL_ASSOCIATED_WITH_YOUR_ACCOUNT')}
        </Text>

        <View style={{ marginTop: 40 }}>
          <ForgotPasswordForm />
        </View>
      </View>
    </AppContainer>
  );
};

export default ForgotPasswordScreen;
