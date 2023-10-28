import { Plus } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from 'react-native-paper';
import { colors } from 'src/constants/colors';
import { bgColor } from 'src/constants/commonStyles';

const AddNewActionModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.outerBtnStyle}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => setModalVisible(true)}>
          <Plus size={32} color={colors.white} />
        </TouchableOpacity>
      </View>
      <Modal
        backdropOpacity={0.3}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.contentView}>
        <View style={styles.container}>
          <Text style={styles.title}>Add New</Text>
          <TouchableOpacity style={styles.option} onPress={() => alert('Add New Expenses')}>
            <Text style={styles.optionText}>Add New Expenses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => alert('Add New Income')}>
            <Text style={styles.optionText}>Add New Income</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => alert('Add New Goals')}>
            <Text style={styles.optionText}>Add New Goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => alert('Add New Budget')}>
            <Text style={styles.optionText}>Add New Budget</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default AddNewActionModal;

const styles = StyleSheet.create({
  btnStyle: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerBtnStyle: {
    width: 75,
    height: 75,
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: bgColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'android' ? 50 : 50,
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey4, // Replace with your color
  },
  optionText: {
    fontSize: 16,
    color: colors.primary, // Replace with your color
  },
});
