import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { RootStackParamList } from 'src/interfaces/navigation';
import MyProfileDetailsScreen from 'src/screens/profile/details/MyProfileDetailsScreen';
import WelcomeLoaderScreen from 'src/screens/welcome/WelcomeLoaderScreen';
import WelcomeSuccessScreen from 'src/screens/welcome/WelcomeSuccessScreen';
import BasicInfoScreen from 'src/screens/welcome/basic-info/BasicInfoScreen';
import FinancialInfoScreen from 'src/screens/welcome/financial-info/FinancialInfoScreen';
import { AuthStackNavigation } from './AuthStackNavigation';
import TabNavigation from './TabNavigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AuthStack">
    <RootStack.Screen name="AuthStack" component={AuthStackNavigation} />
    <RootStack.Screen name="TabNavigation" component={TabNavigation} />
    <RootStack.Screen name="MyProfileDetailsScreen" component={MyProfileDetailsScreen} />
    <RootStack.Screen name="WelcomeSuccessScreen" component={WelcomeSuccessScreen} />
    <RootStack.Screen name="BasicInfoScreen" component={BasicInfoScreen} />
    <RootStack.Screen name="FinancialInfoScreen" component={FinancialInfoScreen} />
    <RootStack.Screen name="WelcomeLoaderScreen" component={WelcomeLoaderScreen} />
  </RootStack.Navigator>
);
