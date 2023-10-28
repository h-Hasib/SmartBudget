import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { Pressable, Text, View, ViewStyle } from 'react-native';
import { textStyles } from 'src/constants/textStyles';

interface HeaderProps {
  HeaderTitle?: string;
  onPress: () => void;
  styleProp?: ViewStyle;
}

const Header = (props: HeaderProps) => {
  const { HeaderTitle, onPress, styleProp } = props;
  return (
    <View
      style={[
        {
          flexDirection: 'row',
        },
        styleProp,
      ]}>
      <View style={{ width: '15%' }}>
        <Pressable onPress={onPress}>
          <ArrowLeft size={24} color={textStyles.primaryTextColor.color} />
        </Pressable>
      </View>
      <View
        style={{
          width: '85%',
          alignItems: 'center',
          paddingEnd: '15%',
        }}>
        <Text style={[textStyles.semiBold16, { color: textStyles.primaryTextColor.color }]}>
          {HeaderTitle ? HeaderTitle : ''}
        </Text>
      </View>
    </View>
  );
};

export default Header;
