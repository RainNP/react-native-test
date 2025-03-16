import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import { UnfinishUser } from "../components/unfinishUser";
import { FinishUser } from "../components/finishUser";
import { AddUserModal } from "../components/addUserModal";
import { useEffect, useState } from "react";
import { UserResponse } from "../model/userModel";
import User from "../repositories/User";

export const HomeScreen = () => {

  const [unfinishUsers, setUnfinishUsers] = useState<UserResponse[]>([])
  const [finishUsers, setFinishUsers] = useState<UserResponse[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [searchName, setSearchName] = useState<string>('')

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const fetchData = async () => {
    setIsLoading(true)
    const users = await User.getUsers()
    setUnfinishUsers(users.filter(user => user.status === false))
    setFinishUsers(users.filter(user => user.status === true))
    setIsLoading(false)
  };

  useEffect(() => {
    fetchData()
  }, []);

  if (isLoading){
    return (
      <Text>Loading...</Text>
    )
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ABCDEF', '#FEDCBA']}
        style={styles.background}
      />
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.titleView}>
              <MaterialCommunityIcons name='chevron-left' color='#004C65' size={30}></MaterialCommunityIcons>
              <Text style={styles.title}>กรอกชื่อลูกค้าที่จะวางแผนการเงิน</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)} >
                <FontAwesome6 name='plus' color='#1F87AA' size={24}></FontAwesome6>
                <Text style={styles.buttonText}>เพิ่ม</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchBar}>
            <FontAwesome5 name='user' color='#8A8C8B' solid></FontAwesome5>
            <TextInput style={styles.input} onChangeText={(text) => setSearchName(text)}></TextInput>
          </View>
        </View>
        <View style={styles.contentContainer}>
          {unfinishUsers.length > 0 &&
            <View style={styles.unfinishUserContainer}>
              <View style={styles.contentTitleContainer}>
                <Text style={styles.contentTitle}>ลูกค้าใหม่ / ข้อมูลไม่ครบถ้วน</Text>
                <View style={styles.contentTitleLine}></View>
              </View>
              {unfinishUsers.map(user => (
                <UnfinishUser key={user.id} id={user.id} name={user.name} profileImage={user.profileImage}></UnfinishUser>
              ))}
            </View>
          }
          {finishUsers.length > 0 &&
            <View style={styles.finishUserContainer}>
              <View style={styles.contentTitleContainer}>
                <Text style={styles.contentTitle}>วางแผนการเงินแล้ว</Text>
                <View style={styles.contentTitleLine}></View>
              </View>
              {finishUsers.map(user => (
                <FinishUser key={user.id} id={user.id} name={user.name} profileImage={user.profileImage}></FinishUser>
              ))}
            </View>
          }
        </View>
      </ScrollView>
      <AddUserModal visible={modalVisible} setVisible={setModalVisible}></AddUserModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    top: 0,
    width: '90%',
    height: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 100,
    marginBottom: 30,
    paddingTop: 24,
    paddingHorizontal: 32,
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'column',
    width: '100%',
    gap: 8,
    paddingBottom: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  titleView: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'IBMPlexSansThai_700Bold',
    color: '#004C65',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    color: '#1F87AA',
    gap: 8,
  },
  buttonText: {
    color: '#1F87AA',
    fontSize: 20,
    fontFamily: 'IBMPlexSansThai_400Regular',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderColor: '#DADCDB',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'IBMPlexSansThai_400Regular',
    color: '#004C65'
  },
  contentContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingLeft: 16,
    gap: 32,
  },
  unfinishUserContainer: {
    flexDirection: 'column',
    gap: 24
  },
  finishUserContainer: {
    flexDirection: 'column',
    gap: 24
  },
  contentTitleContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 24,
    alignItems: 'center'
  },
  contentTitle: {
    fontSize: 14,
    fontFamily: 'IBMPlexSansThai_700Bold',
    color: '#8A8C8B',
  },
  contentTitleLine: {
    height: 1,
    backgroundColor: '#F1F3F0',
    flex: 1,
  }
});
