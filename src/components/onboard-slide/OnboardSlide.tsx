import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import {
  responsiveHeight as resHeight,
  responsiveWidth as resWidth,
} from 'react-native-responsive-dimensions';
import { SvgProps } from 'react-native-svg';
import { colors } from 'src/constants/colors';
import { bgColor } from 'src/constants/commonStyles';
import { textStyles } from 'src/constants/textStyles';
import { typography } from 'src/constants/typography';
import i18n from 'src/languages/i18n';
const { width } = Dimensions.get('window');
interface OnboardSlideProps {
  item: {
    onboardImg: React.ReactElement<SvgProps>;
    title: string;
    subtitle: string;
  };
}

const OnboardSlide: React.FC<OnboardSlideProps> = ({ item }) => {
  const { onboardImg, title, subtitle } = item;

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInUp.duration(1000).springify()}>{onboardImg}</Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).springify()}>
        <Text style={[styles.semiBold30, textStyles.primaryTextColor]}>{i18n.t(title)}</Text>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()}>
        <Text style={[styles.Regular16, { paddingHorizontal: 20 }]}>{i18n.t(subtitle)}</Text>
      </Animated.View>
    </View>
  );
};
export default OnboardSlide;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width,
    backgroundColor: bgColor,
    marginTop: '10%',
    marginBottom: 18,
  },
  subtitle: {
    marginTop: resHeight(1.4),
    maxWidth: resWidth(80),
  },
  semiBold30: {
    fontFamily: typography.PoppinsSemiBold,
    color: colors.black,
    textAlign: 'center',
    fontSize: 27,
    fontWeight: '600',
  },
  Regular16: {
    fontFamily: typography.PoppinsRegular,
    fontSize: 18,
    color: colors.grey1,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 24,
  },
});
