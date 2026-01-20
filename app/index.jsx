import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/favicon.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Home</Text>
      <Text style= {{ marginTop: 10, marginBottom: 30 }}>Welcome to Shelfie App!</Text>

      <View>
        <Text style={styles.card}>Hello, this is a card.</Text>
      </View>
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  img : {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 16,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  }
})