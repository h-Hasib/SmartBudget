import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getPreferredLocale } from 'src/languages/localization';
import { RootNavigation } from 'src/navigation/RootNavigation';
import SplashScreen from 'src/screens/onboarding/splash-screen/SplashScreen';
const queryClient = new QueryClient();

const App = () => {
  //Splash Screen render function
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
          'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
          'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
          'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
          'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
          'Manrope-ExtraBold': require('./src/assets/fonts/Manrope-ExtraBold.ttf'),
          'Manrope-Medium': require('./src/assets/fonts/Manrope-Medium.ttf'),
        });
        //Language Local Setup
        await getPreferredLocale();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen;
    }
  }, []);
  if (!appIsReady) {
    return null;
  }
  // Main render function starts here
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
};
export default App;
