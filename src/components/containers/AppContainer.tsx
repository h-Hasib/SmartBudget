import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { responsiveHeight as resHeight } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from 'src/constants/colors';
import { bgColor } from 'src/constants/commonStyles';

interface ContainerProps {
  styleProp?: ViewStyle;
  children: ReactNode;
  scrollable?: boolean;
  stickyHeader?: ReactNode;
}

const AppContainer = ({
  children,
  styleProp,
  scrollable = false,
  stickyHeader,
}: ContainerProps) => {
  return (
    <>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} animated={true} translucent={true} />
      {scrollable ? (
        <SafeAreaView style={[styles.container, styleProp]}>
          <>
            {stickyHeader}
            <ScrollView
              automaticallyAdjustContentInsets={true}
              keyboardDismissMode={'on-drag'}
              bounces={false}
              alwaysBounceHorizontal={false}
              alwaysBounceVertical={false}
              overScrollMode="never"
              showsVerticalScrollIndicator={false}>
              {children}
            </ScrollView>
          </>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={[styles.container, styleProp]}>
          <>
            {stickyHeader}
            {children}
          </>
        </SafeAreaView>
      )}
    </>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: bgColor,
    height: resHeight(80),
  },
});
