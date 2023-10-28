import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { default as React } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Header from 'src/components/common/Header';
import AppContainer from 'src/components/containers/AppContainer';
import { textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import ResetPasswordForm from './ResetPasswordForm';

type Props = {
  route: RouteProp<RootStackParamList, 'ResetPasswordScreen'>;
};

const ResetPasswordScreen = ({ route }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const email = route.params?.email;
  return (
    <AppContainer styleProp={{ padding: 25 }} scrollable={true}>
      <Header styleProp={{ height: '10%' }} onPress={() => navigation.navigate('LoginScreen')} />
      <View style={{ height: '90%', marginTop: 20, marginBottom: 40 }}>
        <Text style={[textStyles.semiBold24, textStyles.primaryTextColor]}>
          {i18n.t('SET_A_NEW_PASSWORD')}
        </Text>
        <Text
          style={[
            textStyles.regular14,
            { color: textStyles.secondaryTextColor.color, marginTop: 20 },
          ]}>
          {i18n.t('YOUR_NEW_PASSWORD_MUST_BE_DIFFERENT_FROM_PREV')}
        </Text>
        <View style={{ marginTop: 40 }}>
          <ResetPasswordForm email={email} />
        </View>
      </View>
    </AppContainer>
  );
};

export default ResetPasswordScreen;
