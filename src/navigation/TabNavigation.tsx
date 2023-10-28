import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChartBar, CurrencyCircleDollar, HouseLine, Target } from 'phosphor-react-native';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import AddNewActionModal from 'src/components/bottom-sheet/AddNewActionModal';
import { colors, theme } from 'src/constants/colors';
import { typography } from 'src/constants/typography';
import i18n from 'src/languages/i18n';
import AnalyticDashboardScreen from 'src/screens/analytics/AnalyticDashboardScreen';
import AllBudgetScreen from 'src/screens/budget/AllBudgetScreen';
import DashboardScreen from 'src/screens/dashboard/DashboardScreen';
import GoalScreen from 'src/screens/goal/GoalScreen';

const Tab = createBottomTabNavigator();

const EmptyScreenComponent = () => {
  return null;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'DashboardScreen'}
      screenOptions={{
        headerShown: false,
        tabBarAllowFontScaling: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: theme === 'dark' ? colors.dark.grey2 : colors.light.grey2,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name={'DashboardScreen'}
        component={DashboardScreen}
        options={{
          tabBarLabel: i18n.t('HOME'),
          tabBarLabelStyle: styles.labelStyle,
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: '20%',
                position: 'absolute',
              }}>
              <HouseLine size={24} color={focused ? colors.primary : colors.grey2} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'AnalyticDashboardScreen'}
        component={AnalyticDashboardScreen}
        options={{
          tabBarLabel: i18n.t('ANALYTICS'),
          tabBarLabelStyle: styles.labelStyle,
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: '20%',
                position: 'absolute',
              }}>
              <ChartBar size={24} color={focused ? colors.primary : colors.grey2} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ActionButton"
        component={EmptyScreenComponent}
        options={{
          tabBarShowLabel: false,
          tabBarLabelPosition: 'below-icon',
          tabBarButton: () => <AddNewActionModal />,
        }}
      />

      <Tab.Screen
        name={'GoalScreen'}
        component={GoalScreen}
        options={{
          tabBarLabel: i18n.t('GOALS'),
          tabBarLabelStyle: styles.labelStyle,
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: '20%',
                position: 'absolute',
              }}>
              <Target size={24} color={focused ? colors.primary : colors.grey2} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={'AllBudgetScreen'}
        component={AllBudgetScreen}
        options={{
          tabBarLabel: i18n.t('BUDGET'),
          tabBarLabelStyle: styles.labelStyle,
          tabBarLabelPosition: 'below-icon',

          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: '20%',
                position: 'absolute',
              }}>
              <CurrencyCircleDollar size={24} color={focused ? colors.primary : colors.grey2} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: theme === 'dark' ? colors.dark.reverseWhite : colors.light.white,
    height: 80,
    paddingBottom: Platform.OS === 'android' ? 25 : 30,
    marginBottom: 'auto',
    paddingHorizontal: 15,
    elevation: 0,
  },
  labelStyle: {
    fontFamily: typography.PoppinsMedium,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
});
export default TabNavigation;
