import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native'
import React from 'react'
import GlobalStyles from '../assets/styles/GlobalStyles'

// iconos
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// componentes
import ProfileView from './logged/profile/ProfileView'
import { render } from 'react-native-web'

const { width } = Dimensions.get('window');

const DATA = [
  { id: 1, title: 'Perfil', screen: 'ProfileView', icon: <FontAwesome name="user" size={29} /> },
  { id: 2, title: 'Videos', screen: '', icon: <Entypo name="video" size={29} /> },
  { id: 3, title: 'Fotos', screen: 'CameraGallery', icon: <AntDesign name="camera" size={29} /> },
  { id: 4, title: 'Audios', screen: '', icon: <MaterialIcons name="audio-file" size={29} /> },
]

export const IndexView = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(item.screen)}>
        <Text style={styles.title}>{item.icon}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={GlobalStyles.container} >
      <FlatList style={styles.boxContainer} data={DATA} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} />
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
  },
  box: {
    backgroundColor: '#003A9C',
    borderRadius: 10,
    borderWidth: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: width / 2 - 20,
  },
  title: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 22,
  }
});

export default IndexView