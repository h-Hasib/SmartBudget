import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const MyProfileDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 50 }}>MyProfileDetailsScreen</Text>
      <Button
        onPress={() => {
          alert('Smart Budget');
        }}
        title="Print"
        color="gray"
      />
    </View>
  );
};

export default MyProfileDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
