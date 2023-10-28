import React from 'react';
import { Text, View } from 'react-native';
import PageHeader from 'src/components/common/PageHeader';
import AppContainer from 'src/components/containers/AppContainer';
import { textStyles } from 'src/constants/textStyles';

const AllBudgetScreen = () => {
  return (
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
      <View style={{ marginTop: 20, marginBottom: '32%', padding: 15 }}>
        <View style={{ paddingBottom: 20, paddingHorizontal: 10 }}>
          <Text style={[textStyles.semiBold20, textStyles.primaryTextColor]}>
            All Budget Screen
          </Text>
        </View>
        {/* Render Dynamic Content based on Logic */}
      </View>
    </AppContainer>
  );
};

export default AllBudgetScreen;

// const styles = StyleSheet.create({});
