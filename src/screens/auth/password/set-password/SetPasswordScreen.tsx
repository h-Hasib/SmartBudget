import { RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { default as React, useCallback } from 'react';
import { BackHandler, View } from 'react-native';
import { Text } from 'react-native-paper';
import AppContainer from 'src/components/containers/AppContainer';
import { textStyles } from 'src/constants/textStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
import SetPasswordForm from './SetPasswordForm';
type Props = {
  route: RouteProp<RootStackParamList, 'SetPasswordScreen'>;
};

const SetPasswordScreen = ({ route }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const email = route.params?.email;
  //Handles the effect of pressing Hardware Back button
  const routeName = useRoute();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (routeName.name === 'SetPasswordScreen') {
          navigation.navigate('CheckVerificationScreen', { email: email });
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
          {i18n.t('LETS_GET_STARTED')}
        </Text>
        <Text
          style={[
            textStyles.regular14,
            { color: textStyles.secondaryTextColor.color, marginTop: 20 },
          ]}>
          {i18n.t('LETS_CREATE_YOUR_ACCOUNT_WITH')}
          {'\n'}
          {email}
        </Text>
      </View>
      <View style={{ marginVertical: 40 }}>
        <SetPasswordForm email={email} />
      </View>
    </AppContainer>
  );
};

export default SetPasswordScreen;
