import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Navigation } from './components'
import { ILProfile } from './images'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image source={ILProfile} style={styles.imgProfile} />
        <Text style={styles.name}>Ayang</Text>
        <Text style={styles.desc}>Semangat Halunyaa</Text>
      </View>
      <View style={styles.nav}>
        <Navigation />
      </View>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01735E'
  },
  imgProfile: {
    width: 150,
    height: 150
  },
  title: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center'
  },
  name: {
    fontSize: 35,
    marginTop: 30
  },
  desc: {
    fontSize: 23,
    marginTop: 20,
    color: '#45CEB7'
  },


})
