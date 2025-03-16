import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';

export const FinishUser = (props: {
  id: string,
  name: string,
  profileImage: string | null,
}) => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          {props.profileImage ? 
          <Image source={{ uri: props.profileImage }} resizeMode='cover' style={styles.profileImage}></Image> : 
          <MaterialCommunityIcons name='account' size={32} color='#1F87AA'></MaterialCommunityIcons>}
        </View>
        <Text style={styles.profileText}>{props.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonEdit}>
          <FontAwesome6 name='edit' size={20} color='#1F87AA'></FontAwesome6>
          <Text style={styles.buttonEditText}>แก้ไขแผน</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSummary}>
          <FontAwesome6 name='file' size={20} color='#FFFFFF' solid></FontAwesome6>
          <Text style={styles.buttonSummaryText}>ดูสรุปแผนการเงิน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    gap: 16,
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  imageContainer: {
    width: 56,
    height: 56,
    borderRadius: 8,
    gap: 10,
    backgroundColor: '#CEF3FF',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileText: {
    color: '#456455',
    fontFamily: 'IBMPlexSansThai_700Bold',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 24
  },
  buttonEdit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    height: 40,
  },
  buttonEditText: {
    color: '#1F87AA',
    fontFamily: 'IBMPlexSansThai_700Bold',
    fontSize: 16,
  },
  buttonSummary: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F87AA',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    height: 40,
    width: 200,
  },
  buttonSummaryText: {
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSansThai_700Bold',
    fontSize: 16,
  }
});
