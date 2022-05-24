import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Card 
        bgColors={['#FF3F3F', '#EC9B9B']}
        textColor={'white'}
        image={'celta.png'}
        title={'Celta 2008'}
        price={6000}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
