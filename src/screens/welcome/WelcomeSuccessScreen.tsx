// // import { useNavigation } from '@react-navigation/native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import RightArrowButtonWide from 'src/components/buttons/RightArrowButtonWide';
// // import { RootStackParamList } from 'src/types/navigation';

// const WelcomeSuccessScreen = () => {
//   // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   return (
//     <View style={styles.container}>
//       <Text style={{ marginBottom: 250, fontSize: 32 }}>Hurray! You are in</Text>
//       <RightArrowButtonWide
//         btnLabel="TAP TO CONTINUE"
//         mode="outlined"
//         onPress={() => alert('Coming Soon.... :) ')}
//       />
//     </View>
//   );
// };

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { default as React } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import BottomLeftStyle from 'src/assets/svg/splash-onboard/BottomLeftStyle.';
import TopRightStyle from 'src/assets/svg/splash-onboard/TopRightStyle';
import HurrayYouAreIn from 'src/assets/svg/welcome-screen/HurrayYouAreIn';
import { colors } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';
import { typography } from 'src/constants/typography';
import { RootStackParamList } from 'src/interfaces/navigation';
import i18n from 'src/languages/i18n';
const WelcomeSuccessScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={'light'} animated={true} translucent={true} />
      <LinearGradient style={styles.gradient} colors={[colors.cornflowerBlue, colors.steelBlue]}>
        <Animated.View style={{ alignItems: 'flex-end' }}>
          <TopRightStyle />
        </Animated.View>
        <View style={styles.container}>
          <Animated.View>
            <HurrayYouAreIn />
          </Animated.View>
          <View style={{ alignItems: 'center' }}>
            <Animated.View style={[styles.textContainer]}>
              <Text style={styles.logoText}>{i18n.t('HURRAY_YOU_ARE_IN')}</Text>
              <Text style={[textStyles.regular16, { color: colors.secondary, padding: 30 }]}>
                {i18n.t('JUST_SOME_SMALL_QUESTION_TO_PERSONALIZE_YOUR_PROFILE')}
              </Text>
            </Animated.View>
          </View>
        </View>
        <Animated.View style={{ marginBottom: 20, padding: 25 }}>
          <Text
            style={[
              textStyles.regular20,
              { color: colors.secondary, padding: 30, alignSelf: 'center' },
            ]}
            onPress={() => navigation.navigate('TabNavigation')}>
            {i18n.t('TAP_TO_CONTINUE')}
          </Text>
        </Animated.View>
        <Animated.View style={{ position: 'absolute', bottom: 0 }}>
          <BottomLeftStyle />
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default WelcomeSuccessScreen;

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
