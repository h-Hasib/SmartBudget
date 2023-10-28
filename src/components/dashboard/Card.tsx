import { LinearGradient } from 'expo-linear-gradient';
import { TrendDown, TrendUp } from 'phosphor-react-native';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Surface } from 'react-native-paper';
import CardCircle from 'src/assets/svg/dashboard/CardCircle';
import { colors } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';
import i18n from 'src/languages/i18n';

interface cardProps {
  item: {
    totalBalance: number;
    currency: string;
    expenseAmount: number;
    incomeAmount: number;
    cardFor: string;
  };
}

const Card = ({ item }: cardProps) => {
  const { totalBalance, currency, expenseAmount, incomeAmount, cardFor } = item;
  function setColor() {
    switch (cardFor) {
      case 'today':
        return ['#627AF5', '#263584'];
      case 'this month':
        return ['#00AACF', '#006284'];
      case 'last month':
        return ['#6640AB', '#310158'];
      default:
        return ['#627AF5', '#263584'];
    }
  }
  return (
    <Surface
      mode={'elevated'}
      elevation={3}
      style={styles.container}
      onTouchEnd={() => alert('Card Pressed')}>
      <LinearGradient style={styles.gradient} colors={setColor()}>
        <Animated.View style={{ alignItems: 'flex-end' }}>
          <CardCircle />
        </Animated.View>
      </LinearGradient>
      <View style={{ padding: 15 }}>
        <View style={styles.rowSpaceBetween}>
          <View>
            <Text style={[textStyles.regular14, { color: colors.secondary }]}>
              {i18n.t('TOTAL_BALANCE')}
            </Text>
            <Text
              style={[
                textStyles.semiBold24,
                { color: colors.white },
              ]}>{`${currency} ${totalBalance}`}</Text>
          </View>
          <View>
            <Text style={[textStyles.medium12, { color: colors.secondary }]}>
              {cardFor.toLocaleUpperCase()}
            </Text>
          </View>
        </View>
        <View style={[{ marginTop: 30 }, styles.rowSpaceBetween]}>
          <View>
            <View style={styles.rowCenter}>
              <TrendUp size={18} color={colors.secondary} />
              <Text style={[textStyles.regular12, { color: colors.secondary, marginLeft: 10 }]}>
                {i18n.t('INCOME')}
              </Text>
            </View>
            <Text
              style={[
                textStyles.semiBold16,
                { color: colors.white },
              ]}>{`${currency} ${incomeAmount}`}</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <View style={styles.rowCenter}>
              <TrendDown size={18} color={colors.secondary} />
              <Text style={[textStyles.regular12, { color: colors.secondary, marginLeft: 10 }]}>
                {i18n.t('EXPENSE')}
              </Text>
            </View>
            <Text
              style={[
                textStyles.semiBold16,
                { color: colors.white },
              ]}>{`${currency} ${expenseAmount}`}</Text>
          </View>
        </View>
      </View>
    </Surface>
  );
};

export default Card;

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  container: {
    height: 170,
    width: 310,
    borderRadius: 12,
    marginHorizontal: 8,
    marginVertical: 20,
    overflow: 'hidden',
  },
  rowSpaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
});
