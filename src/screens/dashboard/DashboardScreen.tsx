import { useFocusEffect, useRoute } from '@react-navigation/native';
import {
  Barbell,
  Car,
  GasPump,
  GraduationCap,
  Hamburger,
  Heartbeat,
  House,
  Lightning,
  MusicNotesSimple,
  ShoppingCart,
  Wine,
} from 'phosphor-react-native';
import React, { useCallback, useRef } from 'react';
import { BackHandler, FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import PageHeader from 'src/components/common/PageHeader';
import AppContainer from 'src/components/containers/AppContainer';
import Card from 'src/components/dashboard/Card';
import FrequentIconCard from 'src/components/dashboard/FrequentIconCard';
import TransactionCard from 'src/components/dashboard/TransactionCard';
import UpcomingPaymentCard from 'src/components/dashboard/UpcomingPaymentCard';
import { colors } from 'src/constants/colors';
import { textStyles } from 'src/constants/textStyles';
import i18n from 'src/languages/i18n';
import { closeApp } from 'src/services/common.service';

const cardData = [
  {
    id: '1',
    totalBalance: 20410,
    incomeAmount: 187868890,
    expenseAmount: 13478676768,
    cardFor: 'today',
    currency: 'BDT',
  },
  {
    id: '2',
    totalBalance: 10,
    incomeAmount: 223,
    expenseAmount: 699,
    cardFor: 'this month',
    currency: 'BDT',
  },
  {
    id: '3',
    totalBalance: 948910,
    incomeAmount: 23098,
    expenseAmount: 62349,
    cardFor: 'last month',
    currency: 'BDT',
  },
];

const mostFrequentIconData = [
  {
    id: '1',
    icon: <Hamburger size={30} color={colors.white} />,
    color: '#F9AF58',
  },
  {
    id: '2',
    icon: <Wine size={30} color={colors.white} />,
    color: '#7C71AD',
  },
  {
    id: '3',
    icon: <Heartbeat size={30} color={colors.white} />,
    color: '#FE615A',
  },
  {
    id: '4',
    icon: <GraduationCap size={30} color={colors.white} />,
    color: '#09759D',
  },
  {
    id: '5',
    icon: <MusicNotesSimple size={30} color={colors.white} />,
    color: '#355367',
  },
  {
    id: '6',
    icon: <Car size={30} color={colors.white} />,
    color: '#3742A0',
  },
  {
    id: '7',
    icon: <GasPump size={30} color={colors.white} />,
    color: '#8C5E58',
  },
  {
    id: '8',
    icon: <Barbell size={30} color={colors.white} />,
    color: '#EA6C36',
  },
  {
    id: '9',
    icon: <ShoppingCart size={30} color={colors.white} />,
    color: '#489B46',
  },
  {
    id: '10',
    icon: <Lightning size={30} color={colors.white} />,
    color: '#E2B538',
  },
];

const recurringPaymentCardData = [
  {
    id: '1',
    icon: <GasPump size={28} color={colors.white} />,
    color: '#8C5E58',
    title: 'Fuel',
    currency: 'BDT',
    amount: 3450,
    remainingDays: 2,
  },
  {
    id: '2',
    icon: <GraduationCap size={28} color={colors.white} />,
    color: '#09759D',
    title: 'Education',
    currency: 'BDT',
    amount: 48900,
    remainingDays: 62,
  },
  {
    id: '3',
    icon: <Lightning size={28} color={colors.white} />,
    color: '#E2B538',
    title: 'Utility',
    currency: 'BDT',
    amount: 1475,
    remainingDays: 10,
  },
  {
    id: '4',
    icon: <House size={28} color={colors.white} />,
    color: '#794545',
    title: 'House rent',
    currency: 'BDT',
    amount: 5450,
    remainingDays: 15,
  },
  {
    id: '5',
    icon: <Heartbeat size={28} color={colors.white} />,
    color: '#FE615A',
    title: 'Medicine',
    currency: 'BDT',
    amount: 7450,
    remainingDays: 2,
  },
];

const latestTransactionCardData = [
  {
    id: '1',
    icon: <Lightning size={28} color={colors.white} />,
    color: '#E2B538',
    title: 'Utility',
    currency: 'BDT',
    amount: 1750,
    arrowUp: true,
    date: '2 Sept, 2023',
  },
  {
    id: '2',
    icon: <House size={28} color={colors.white} />,
    color: '#794545',
    title: 'Home rent',
    currency: 'BDT',
    amount: 22300,
    arrowUp: false,
    date: '19 Aug, 2023',
  },
  {
    id: '3',
    icon: <Heartbeat size={28} color={colors.white} />,
    color: '#FE615A',
    title: 'Health',
    currency: 'BDT',
    amount: 175,
    arrowUp: true,
    date: '2 Jul, 2023',
  },
  {
    id: '4',
    icon: <GraduationCap size={28} color={colors.white} />,
    color: '#09759D',
    title: 'Education',
    currency: 'BDT',
    amount: 48900,
    arrowUp: false,
    date: '2 Oct, 2023',
  },
  {
    id: '5',
    icon: <Barbell size={30} color={colors.white} />,
    color: '#EA6C36',
    title: 'Gym',
    currency: 'BDT',
    amount: 750,
    arrowUp: true,
    date: '1 Sept, 2023',
  },
  {
    id: '6',
    icon: <Hamburger size={28} color={colors.white} />,
    color: '#F9AF58',
    title: 'Food & Snacks',
    currency: 'BDT',
    amount: 750,
    arrowUp: true,
    date: '1 Sept, 2023',
  },
];

const DashboardScreen = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const ref = useRef(null);

  //Handles the effect of pressing Hardware Back button
  const route = useRoute();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'DashboardScreen') {
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
  return (
    <>
      <AppContainer
        styleProp={{ padding: 0 }}
        scrollable={true}
        stickyHeader={
          <View>
            <PageHeader
              styleProp={{ paddingHorizontal: 20, marginTop: 5, marginBottom: 10 }}
              hasNotificationBadge={true}
            />
          </View>
        }>
        <View style={{ marginTop: 20, marginBottom: '32%' }}>
          <View style={{ marginBottom: 10, marginHorizontal: 25 }}>
            <Text style={[textStyles.regular12, textStyles.secondaryTextColor]}>Good Morning</Text>
            <Text style={[textStyles.semiBold20, textStyles.primaryTextColor]}>Hasibul Hasan</Text>
          </View>

          {/* Render Dynamic Content based on Logic */}
          <View>
            {cardData.length > 0 && (
              <View style={{}}>
                <FlatList
                  ref={ref}
                  data={cardData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  bounces={cardData.length === 1 ? false : true}
                  alwaysBounceHorizontal={cardData.length === 1 ? false : true}
                  overScrollMode={cardData.length === 1 ? 'never' : 'always'}
                  renderItem={({ item }) => <Card item={item} />}
                  contentContainerStyle={{ paddingHorizontal: 12 }}
                  style={
                    cardData.length === 1
                      ? { flexDirection: 'row', alignSelf: 'center' }
                      : { marginBottom: 10 }
                  }
                />
              </View>
            )}

            {/* FLatList for 'Most Frequent' item */}
            {mostFrequentIconData.length > 0 && (
              <>
                <View style={styles.contentHeader}>
                  <Text style={[textStyles.semiBold16, textStyles.primaryTextColor]}>
                    {i18n.t('MOST_FREQUENT')}
                  </Text>
                  <Text
                    style={[textStyles.semiBold14, { color: colors.blue }]}
                    onPress={() => alert(`"View All"`)}>
                    {i18n.t('VIEW_ALL')}
                  </Text>
                </View>
                <View style={{ marginTop: 15, marginBottom: 25 }}>
                  <FlatList
                    ref={ref}
                    data={mostFrequentIconData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={true}
                    alwaysBounceHorizontal={true}
                    overScrollMode="always"
                    renderItem={({ item }) => <FrequentIconCard touchable={true} item={item} />}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    style={{}}
                  />
                </View>
              </>
            )}

            {/* FlatList for 'Recurring Payments */}
            {recurringPaymentCardData.length > 0 && (
              <>
                <View style={styles.contentHeader}>
                  <Text style={[textStyles.semiBold16, textStyles.primaryTextColor]}>
                    {i18n.t('RECURRING_PAYMENTS')}
                  </Text>
                  <Text
                    style={[textStyles.semiBold14, { color: colors.blue }]}
                    onPress={() => alert(`"View All"`)}>
                    {i18n.t('VIEW_ALL')}
                  </Text>
                </View>
                <View style={{ marginTop: 10, marginBottom: 20 }}>
                  <FlatList
                    ref={ref}
                    data={recurringPaymentCardData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={recurringPaymentCardData.length < 3 ? false : true}
                    alwaysBounceHorizontal={recurringPaymentCardData.length < 3 ? false : true}
                    overScrollMode={recurringPaymentCardData.length < 3 ? 'never' : 'always'}
                    renderItem={({ item }) => <UpcomingPaymentCard item={item} />}
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    style={{}}
                  />
                </View>
              </>
            )}

            {/* FlatList for 'Latest Transaction' */}
            {latestTransactionCardData.length > 0 && (
              <>
                <View style={styles.contentHeader}>
                  <Text style={[textStyles.semiBold16, textStyles.primaryTextColor]}>
                    {i18n.t('LATEST_TRANSACTION')}
                  </Text>
                  <Text
                    style={[textStyles.semiBold14, { color: colors.blue }]}
                    onPress={() => alert(`"View All"`)}>
                    {i18n.t('VIEW_ALL')}
                  </Text>
                </View>

                <View style={{ marginTop: 10, marginBottom: 20 }}>
                  <FlatList
                    ref={ref}
                    data={latestTransactionCardData}
                    scrollEnabled={false}
                    renderItem={({ item }) => <TransactionCard item={item} />}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </AppContainer>
    </>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  cardContainer: {},

  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
