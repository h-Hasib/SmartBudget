import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from 'src/interfaces/navigation';
import LoginScreen from 'src/screens/auth/login/LoginScreen';
import EmailSetupOtpScreen from 'src/screens/auth/otp/EmailSetupOtpScreen';
import ForgotPasswordOtpScreen from 'src/screens/auth/otp/ForgotPasswordOtpScreen';
import ForgotPasswordScreen from 'src/screens/auth/password/forgot-password/ForgotPasswordScreen';
import ResetPasswordScreen from 'src/screens/auth/password/reset-password/ResetPasswordScreen';
import ResetPasswordSuccessScreen from 'src/screens/auth/password/reset-password/ResetPasswordSuccessScreen';
import SetPasswordScreen from 'src/screens/auth/password/set-password/SetPasswordScreen';
import EmailSetupScreen from 'src/screens/auth/sign-up/email-setup/EmailSetupScreen';
import CheckVerificationScreen from 'src/screens/auth/sign-up/email-verification/CheckVerificationScreen';
import SendVerificationScreen from 'src/screens/auth/sign-up/email-verification/SendVerificationScreen';
import GetStartedScreen from 'src/screens/onboarding/get-started/GetStartedScreen';
import SplashScreen from 'src/screens/onboarding/splash-screen/SplashScreen';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

export const AuthStackNavigation = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
    <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
    <AuthStack.Screen name="GetStartedScreen" component={GetStartedScreen} />
    <AuthStack.Screen name="EmailSetupScreen" component={EmailSetupScreen} />
    <AuthStack.Screen name="SendVerificationScreen" component={SendVerificationScreen} />
    <AuthStack.Screen name="CheckVerificationScreen" component={CheckVerificationScreen} />
    <AuthStack.Screen name="SetPasswordScreen" component={SetPasswordScreen} />
    <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    <AuthStack.Screen name="EmailSetupOtpScreen" component={EmailSetupOtpScreen} />
    <AuthStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    <AuthStack.Screen name="ForgotPasswordOtpScreen" component={ForgotPasswordOtpScreen} />
    <AuthStack.Screen name="ResetPasswordSuccessScreen" component={ResetPasswordSuccessScreen} />
  </AuthStack.Navigator>
);
