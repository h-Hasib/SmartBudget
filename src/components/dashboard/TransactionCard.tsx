import { ArrowDown, ArrowUp, CalendarBlank } from 'phosphor-react-native';
import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, theme } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';
import FrequentIconCard from './FrequentIconCard';

interface cardProps {
  item: {
    icon: ReactNode;
    color: string;
    title: string;
    currency: string;
    amount: number;
    arrowUp: boolean;
    styleProp?: ViewStyle;
    date: string;
  };
}

const TransactionCard = ({ item }: cardProps) => {
  const { icon, color, styleProp, title, currency, amount, arrowUp, date } = item;
  return (
    <Pressable onTouchEnd={() => alert(`${title} Pressed`)} style={[styleProp, styles.container]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FrequentIconCard
          touchable={false}
          item={{ icon: icon, color: color, height: 40, width: 40 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={[textStyles.medium14, textStyles.primaryTextColor]}>{title}</Text>
          <View style={styles.calenderContainer}>
            <CalendarBlank size={14} color={textStyles.secondaryTextColor.color} />
            <Text style={[textStyles.medium10, textStyles.secondaryTextColor, { marginLeft: 8 }]}>
              {date}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {arrowUp ? (
          <ArrowUp size={20} color={textStyles.secondaryTextColor.color} />
        ) : (
          <ArrowDown size={20} color={colors.red} />
        )}

        <Text
          style={[
            textStyles.medium16,
            {
              color: arrowUp ? textStyles.secondaryTextColor.color : colors.red,
              marginLeft: 5,
            },
          ]}>{`${currency} ${amount}`}</Text>
      </View>
    </Pressable>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 6,
    backgroundColor: theme === 'dark' ? colors.dark.reverseWhite : colors.light.white,
    elevation: 1,
  },
  calenderContainer: {
    borderRadius: 4,
    backgroundColor: theme === 'dark' ? colors.dark.grey5 : colors.light.grey5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginVertical: 5,
  },
});
