import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import {
  BackHandler,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  responsiveHeight as resHeight,
  responsiveWidth as resWidth,
} from 'react-native-responsive-dimensions';
import Onboard from 'src/assets/svg/splash-onboard/slide';
import Onboard2 from 'src/assets/svg/splash-onboard/slide2';
import Onboard3 from 'src/assets/svg/splash-onboard/slide3';
import RightArrowButtonWide from 'src/components/buttons/RightArrowButtonWide';
import OnboardSlide from 'src/components/onboard-slide/OnboardSlide';
import { theme } from 'src/constants/colors';
import { bgColor } from 'src/constants/commonStyles';
import { RootStackParamList } from 'src/interfaces/navigation';
import { closeApp } from 'src/services/common.service';
const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    onboardImg: <Onboard />,
    title: 'SET_YOUR_BUDGET_&_TRACK_EXPENSE',
    subtitle: 'GET_STARTED_DESCRIPTION_ONE',
  },
  {
    id: '2',
    onboardImg: <Onboard2 />,
    title: 'SPEND_SMARTER_EVERYDAY_ALL_FROM_ONE_APP',
    subtitle: 'GET_STARTED_DESCRIPTION_ONE',
  },
  {
    id: '3',
    onboardImg: <Onboard3 />,
    title: 'ACHIEVE_YOUR_FINANCIAL_GOALS',
    subtitle: 'GET_STARTED_DESCRIPTION_THREE',
  },
];

const GetStartedScreen: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  //Handles the effect of pressing Hardware Back button
  const route = useRoute();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'GetStartedScreen') {
          closeApp();
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

  const updateCurrentSlideIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      overScrollMode="never"
      contentContainerStyle={styles.container}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} animated={true} translucent={true} />
      <View>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={slides}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          alwaysBounceHorizontal={false}
          overScrollMode="never"
          renderItem={({ item }) => <OnboardSlide item={item} />}
        />
        {/* ======Indicator===== */}
        <View style={styles.indicatorContainer}>
          {/* =====Render indicator===== */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: '#2E64EF',
                  width: resWidth(8.2),
                },
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <RightArrowButtonWide
          btnLabel={'GET_STARTED'}
          mode={'contained'}
          onPress={() => navigation.navigate('EmailSetupScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: resHeight(80),
    backgroundColor: bgColor,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: resHeight(4),
  },
  indicator: {
    height: resHeight(0.5),
    width: resWidth(5.2),
    backgroundColor: '#DFE3EC',
    marginHorizontal: resWidth(0.7),
    borderRadius: 2,
  },
  btnContainer: {
    padding: 25,
    alignItems: 'center',
    marginBottom: '2%',
  },
});
