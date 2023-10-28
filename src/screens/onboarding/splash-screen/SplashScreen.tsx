import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import BottomLeftStyle from 'src/assets/svg/splash-onboard/BottomLeftStyle.';
import LogoIcon from 'src/assets/svg/splash-onboard/LogoIcon';
import TopRightStyle from 'src/assets/svg/splash-onboard/TopRightStyle';
import { colors } from 'src/constants/colors';
import { typography } from 'src/constants/typography';
import { RootStackParamList } from 'src/interfaces/navigation';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const duration = 1500;
    const interval = 150;

    const incrementValue = 1 / (duration / interval);

    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + incrementValue;
        return newProgress >= 1 ? 1 : newProgress;
      });
    }, interval);

    const delay = setTimeout(() => {
      setIsReady(true);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(delay);
    };
  }, []);

  useEffect(() => {
    if (isReady) {
      navigation.navigate('GetStartedScreen');
    }
  }, [isReady, navigation]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={'light'} animated={true} translucent={true} />
      <LinearGradient style={styles.gradient} colors={[colors.cornflowerBlue, colors.steelBlue]}>
        <Animated.View style={{ alignItems: 'flex-end' }}>
          <TopRightStyle />
        </Animated.View>
        <View style={styles.container}>
          <Animated.View>
            <LogoIcon />
          </Animated.View>
          <View style={{ alignItems: 'center' }}>
            <Animated.View style={[styles.textContainer, isReady ? {} : { opacity: 0 }]}>
              <Text style={styles.logoText}>Smart </Text>
              <Text style={[styles.logoText, { fontFamily: typography.ManropeMedium }]}>
                Budget
              </Text>
            </Animated.View>
            <Animated.View style={[isReady ? {} : { opacity: 0 }]}>
              <Progress.Bar
                progress={progress}
                animationType="timing"
                animationConfig={{ duration: 1500 }}
                borderWidth={0}
                height={7}
                width={177}
                color={colors.white}
                unfilledColor="rgba(255, 255, 255, .2)"
              />
            </Animated.View>
          </View>
        </View>
        <Animated.View style={{ position: 'absolute', bottom: 0 }}>
          <BottomLeftStyle />
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 75,
  },
  progress: {
    margin: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logoText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: typography.ManropeExtraBold,
  },
});
