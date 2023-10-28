import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { default as React, useCallback } from 'react';
import { Animated, BackHandler, StyleSheet, Text, View } from 'react-native';
import PasswordChanged from 'src/assets/svg/reset-password/PasswordChanged';
import BottomLeftStyle from 'src/assets/svg/splash-onboard/BottomLeftStyle.';
import TopRightStyle from 'src/assets/svg/splash-onboard/TopRightStyle';
import RightArrowButtonWide from 'src/components/buttons/RightArrowButtonWide';
import { colors } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';
import { typography } from 'src/constants/typography';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
const ResetPasswordSuccessScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  //Handles the effect of pressing Hardware Back button
  const route = useRoute();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'ResetPasswordSuccessScreen') {
          navigation.navigate('LoginScreen');
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
    <View style={{ flex: 1 }}>
      <StatusBar style={'light'} animated={true} translucent={true} />
      <LinearGradient style={styles.gradient} colors={[colors.cornflowerBlue, colors.steelBlue]}>
        <Animated.View style={{ alignItems: 'flex-end' }}>
          <TopRightStyle />
        </Animated.View>
        <View style={styles.container}>
          <Animated.View>
            <PasswordChanged />
          </Animated.View>
          <View style={{ alignItems: 'center' }}>
            <Animated.View style={[styles.textContainer]}>
              <Text style={styles.logoText}>{i18n.t('PASSWORD_CHANGED')}</Text>
              <Text style={[textStyles.regular16, { color: colors.secondary, padding: 25 }]}>
                {i18n.t('YOUR_PASSWORD_HAS_BEEN_SUCCESSFULLY_CHANGED')}
              </Text>
            </Animated.View>
          </View>
        </View>
        <Animated.View style={{ marginBottom: 40, padding: 25 }}>
          <RightArrowButtonWide
            btnLabel="CONTINUE_TO_LOGIN"
            mode="outlined"
            styleProp={{ backgroundColor: colors.white }}
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </Animated.View>
        <Animated.View style={{ position: 'absolute', bottom: 0 }}>
          <BottomLeftStyle />
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default ResetPasswordSuccessScreen;

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  progress: {
    margin: 10,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logoText: {
    color: '#fff',
    fontSize: 26,
    fontFamily: typography.ManropeExtraBold,
  },
});
