import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export const AppHeader = () => {
  const logo = require('../../assets/smart-Logo.png');
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} resizeMode='contain'></Image>
        <View style={styles.navBarContainer}>
          <View style={styles.homeButton}>
            <MaterialCommunityIcons name='home' size={16} color='#004C65' />
            <Text style={styles.text}>หน้าหลัก</Text>
          </View>
          <MaterialCommunityIcons name='chevron-right' size={30} color='#004C65' />
          <Text style={styles.text}>วางแผนการเงิน</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageSize}>
            <Image style={styles.profileImage} resizeMode='cover' source={require('../../assets/profile.png')}></Image>
          </View>
          <View style={styles.profileStatus}></View>
        </View>
        <Text style={styles.text}>ไกด์ เงินเพิ่มพูน</Text>
        <FontAwesome5 size={20} name='caret-down' color='#004C65'></FontAwesome5>
      </View>
      <View style={styles.notiContainer}>
        <FontAwesome5 size={26} name='users' color='#004C65'></FontAwesome5>
        <View style={styles.notiNumber}>
          <Text style={styles.text}>34</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 48,
    paddingRight: 48,
    gap: 24,
    color: '#004C65',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    left: 20,
    width: '100%',
    height: '50%',
    alignItems: 'center',
    gap: 24
  },
  navBarContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  homeButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 8
  },
  logo: {
    width: '20%',
    height: '100%',
  },
  profileContainer: {
    flex: 0.3,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '10%',
    height: '50%',
  },
  imageContainer: {
    width: 53,
    height: 48,
  },
  imageSize: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileStatus: {
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: '#1F87AA',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: '#004C65',
  },
  notiContainer: {
    flex: 0.08,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  notiNumber: {
    width: 25,
    height:21,
    position: 'absolute',
    borderRadius: '50%',
    right: 0,
    bottom: 0,
    backgroundColor: '#E56060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#004C65',
    fontFamily: 'IBMPlexSansThai_700Bold',
    fontSize: 16,
  }
});