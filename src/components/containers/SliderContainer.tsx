import React, { FC, ReactNode } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { responsiveHeight as resHeight } from 'react-native-responsive-dimensions';
import { colors } from 'src/constants/colors';

interface ContainerProps {
  children: ReactNode;
  header?: ReactNode;
  onRefresh?: () => void;
}

const Container: FC<ContainerProps> = ({ children, header, onRefresh }) => {
  return (
    <SafeAreaView style={styles.container}>
      {header}
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        refreshControl={onRefresh && <RefreshControl refreshing={false} onRefresh={onRefresh} />}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  contentContainer: {
    paddingBottom: resHeight(10),
    flexGrow: 1,
    backgroundColor: colors.black,
  },
});
