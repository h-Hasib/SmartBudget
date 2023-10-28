import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, theme } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';
import FrequentIconCard from './FrequentIconCard';

interface cardProps {
  item: {
    icon: ReactNode;
    color: string;
    styleProp?: ViewStyle;
    title: string;
    currency: string;
    amount: number;
    remainingDays: number;
  };
}

const UpcomingPaymentCard = ({ item }: cardProps) => {
  const { icon, color, styleProp, title, currency, amount, remainingDays } = item;
  function setTextColor() {
    if (remainingDays > 0 && remainingDays <= 7) return colors.red;
    else if (remainingDays > 7 && remainingDays <= 31) return colors.yellow;
    else return colors.green;
  }
  function setBackgroundColor() {
    if (remainingDays > 0 && remainingDays <= 7) return '#F652521A';
    else if (remainingDays > 7 && remainingDays <= 31) return '#E9AF591A';
    else return '#0DB0501A';
  }
  return (
    <Pressable onTouchEnd={() => alert(`${title} Pressed`)} style={[styleProp, styles.container]}>
      <FrequentIconCard
        touchable={false}
        item={{ icon: icon, color: color, height: 40, width: 40 }}
      />
      <Text
        style={[
          textStyles.semiBold14,
          textStyles.primaryTextColor,
          { marginTop: 8 },
        ]}>{`${title}`}</Text>
      <Text
        style={[
          textStyles.medium12,
          { color: colors.green, marginBottom: 8 },
        ]}>{`${currency} ${amount}`}</Text>
      <View style={[styles.remainingDaysAlert, { backgroundColor: setBackgroundColor() }]}>
        <Text
          style={[
            textStyles.medium10,
            { color: setTextColor() },
          ]}>{`${remainingDays} days left`}</Text>
      </View>
    </Pressable>
  );
};

export default UpcomingPaymentCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme === 'dark' ? colors.dark.reverseWhite : colors.light.white,
    height: 150,
    width: 135,
    borderRadius: 8,
    marginHorizontal: 6,
    marginVertical: 5,
    paddingVertical: 16,
    elevation: 2,
  },
  remainingDaysAlert: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
});
