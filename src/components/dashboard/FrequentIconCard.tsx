import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';

interface iconProps {
  touchable: boolean;
  item: {
    icon: ReactNode;
    color: string;
    height?: number;
    width?: number;
    styleProp?: ViewStyle;
  };
}

const FrequentIconCard = ({ touchable, item }: iconProps) => {
  const { icon, color, height = 50, width = 50, styleProp = { marginHorizontal: 8 } } = item;
  return (
    <Pressable
      onTouchEnd={() => (touchable ? alert('Icon Pressed') : {})}
      style={[
        styleProp,
        styles.iconContainer,
        { height: height, width: width, backgroundColor: color },
      ]}>
      <View style={styles.iconStyle}>{icon}</View>
    </Pressable>
  );
};

export default FrequentIconCard;

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 50,
  },
  iconStyle: { alignSelf: 'center', justifyContent: 'center', paddingTop: '15%' },
});
