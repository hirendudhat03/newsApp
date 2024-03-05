import React from 'react';
import {StyleSheet, Modal, View, ActivityIndicator} from 'react-native';
import {COLORS} from '../helper';

const Loader = ({visible}) => {
  return (
    <Modal style={{}} animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalBgView}>
          <View style={styles.subView}>
            <ActivityIndicator size={25} color={COLORS.orange} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBgView: {
    width: '100%',
    height: '90%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gifStyle: {width: 120, height: 120},
  subView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
