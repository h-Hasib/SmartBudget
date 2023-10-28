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
  route: RouteProp<RootStackParamList, 'SendVerificationScreen'>;
};

const SendVerificationScreen = ({ route }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const email = route.params?.email;
  return (
    <AppContainer styleProp={{ padding: 25 }} scrollable={false}>
      <Header
        styleProp={{ height: '10%' }}
        onPress={() => navigation.navigate('EmailSetupScreen')}
      />
      <View style={{ height: '90%' }}>
        <Text style={[textStyles.semiBold24, textStyles.primaryTextColor, { marginBottom: 10 }]}>
          {i18n.t('VERIFY_YOUR_EMAIL_ADDRESS')}
        </Text>
        <Text style={[textStyles.regular14, textStyles.secondaryTextColor]}>
          {i18n.t('THIS_PROCESS_HELPS_US_TO_IDENTIFY_FRAUD_AND_KEEP_YOUR_PERSONAL_DATA_SAFE')}
        </Text>
        <View style={styles.btnContainer}>
          <RightArrowButtonWide
            btnLabel={'SEND_VERIFICATION_CODE'}
            mode="contained"
            onPress={() => navigation.navigate('CheckVerificationScreen', { email: email })}
          />
        </View>
      </View>
    </AppContainer>
  );
};

export default SendVerificationScreen;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginTop: '25%',
  },
});
