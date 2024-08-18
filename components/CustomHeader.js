import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomHeader({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image style={styles.headerIcon} source={require('../assets/game.png')}/>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
    color:'#fff'
  },
  headerTitle:{
    flexDirection: 'row',
    
    
  },
  headerIcon:{
    width:26,
    height:26,
    marginHorizontal:10
  }
});
