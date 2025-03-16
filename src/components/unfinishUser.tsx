import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';

export const UnfinishUser = (props: {
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
      <TouchableOpacity style={styles.button}>
        <FontAwesome6 name='arrow-right' size={20} color='#FFFFFF'></FontAwesome6>
        <Text style={styles.buttonText}>เริ่มวางแผน</Text>
      </TouchableOpacity>
    </View>
  );
}

// FIXME: could DRY this with FinishUser
const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    gap: 16,
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
  button: {
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
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSansThai_700Bold',
    fontSize: 16,
  }
});
