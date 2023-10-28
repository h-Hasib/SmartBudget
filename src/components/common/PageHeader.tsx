// import React from 'react';
// import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
// import { Avatar } from 'react-native-paper';
// import BellIcon from 'src/assets/svg/dashboard/BellIcon';
// import DrawerIcon from 'src/assets/svg/dashboard/DrawerIcon';
// import { colors, theme } from 'src/constants/colors';
// import { bgColor } from 'src/constants/commonStyles';
// interface headerProps {
//   styleProp?: ViewStyle;
// }
// // const hasNotificationBadge = false;
// // const profilePicture = ``;
// const PageHeader = ({ styleProp }: headerProps) => {
//   return (
//     <View style={[styleProp, styles.container]}>
//       <View>
//         <Pressable onPress={() => alert('Open Drawer Menu')}>
//           <DrawerIcon
//             width={35}
//             height={35}
//             color={theme === 'dark' ? colors.dark.grey1 : colors.light.grey1}
//           />
//         </Pressable>
//       </View>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <View
//           style={{
//             marginHorizontal: 20,
//           }}>
//           <Pressable onPress={() => alert('Navigate to NotificationScreen')}>
//             <BellIcon
//               width={24}
//               height={24}
//               color={theme === 'dark' ? colors.dark.grey2 : colors.light.grey2}
//             />
//           </Pressable>
//         </View>
//         <View>
//           <Pressable onPress={() => alert('Open Profile Page')}>
//             <Avatar.Image size={24} source={require('src/assets/app-icon/icon.png')} />
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default PageHeader;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: bgColor,
//   },
// });

import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { Avatar } from 'react-native-paper';
import BellIcon from 'src/assets/svg/dashboard/BellIcon';
import DrawerIcon from 'src/assets/svg/dashboard/DrawerIcon';
import { colors, theme } from 'src/constants/colors';
import { bgColor } from 'src/constants/commonStyles';

interface HeaderProps {
  styleProp?: ViewStyle;
  hasNotificationBadge?: boolean;
}

const PageHeader = ({ styleProp, hasNotificationBadge = false }: HeaderProps) => {
  return (
    <View style={[styleProp, styles.container]}>
      <View>
        <Pressable onPress={() => alert('Open Drawer Menu')}>
          <DrawerIcon
            width={35}
            height={35}
            color={theme === 'dark' ? colors.dark.grey1 : colors.light.grey1}
          />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginHorizontal: 20 }}>
          <Pressable onPress={() => alert('Navigate to NotificationScreen')}>
            <BellIcon
              width={24}
              height={24}
              color={theme === 'dark' ? colors.dark.grey2 : colors.light.grey2}
            />
            {hasNotificationBadge && <View style={styles.notificationBadge} />}
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => alert('Open Profile Page')}>
            <Avatar.Image size={24} source={require('src/assets/app-icon/icon.png')} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: bgColor,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.primary,
    width: 11,
    height: 11,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: bgColor,
  },
});

export default PageHeader;
