import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const BasicInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 50 }}>BasicInfoScreen</Text>
      <Button onPress={() => alert('coning soon...')} title="Explore More?" color="tomato" />
    </View>
  );
};

export default BasicInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
