import { Modal, View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";

export const AddUserModal = (props: {
  visible: boolean,
  setVisible: (visible: boolean) => void,
}) => {

  const [name, setName] = useState<string>('')

  const handleClose = () => {
    setName('')
    props.setVisible(false)
  };

  // POST
  const handleSave = async () => {}

  return (
  <Modal
    visible={props.visible}
    animationType="fade"
    transparent={true}
    onRequestClose={() => props.setVisible(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <Text style={styles.headerText}>เพิ่มลูกค้า</Text>
          <TouchableOpacity onPress={handleClose}>
            <MaterialCommunityIcons name='close' color='#8A8C8B' size={24}></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
        <View style={styles.modalInputContainer}>
          <FontAwesome5 name='user' color='#8A8C8B' size={14} solid></FontAwesome5>
          <TextInput style={styles.input} onChangeText={(text) => setName(text)}></TextInput>
        </View>
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity style={styles.modalButtonClose} onPress={handleClose}>
            <Text style={styles.closeText}>ปิด</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButtonSave} onPress={handleSave}>
            <FontAwesome5 name='save' color='#FFFFFF' size={18} solid></FontAwesome5>
            <Text style={styles.saveText}>บันทึก</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flexDirection: 'column',
    width: 492,
    height: 250,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 32,
    gap: 24
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#004C65',
    fontFamily: 'IBMPlexSansThai_700Bold',
    fontSize: 24,
  },
  modalInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderColor: '#DADCDB',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'IBMPlexSansThai_400Regular',
    color: '#004C65'
  },
  modalButtonContainer: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  modalButtonClose: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#456455',
    fontFamily: 'IBMPlexSansThai_700Bold',
    fontSize: 18,
  },
  modalButtonSave: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F87AA',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8
  },
  saveText: {
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSansThai_700Bold',
    fontSize: 18,
  }
});
