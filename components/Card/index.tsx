import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

interface PropTypes {
  bgColors: Array<string>,
  textColor: string,
  image: string,
  title: string,
  price: number
}

const Card = ({ bgColors, textColor, image, title, price }:PropTypes) => {
  return (
    <View style={styles.cardWrapper}>
      <Image 
        resizeMode={'contain'}
        style={styles.image}
        source={require('../../assets/images/' + image)}
      />
      <LinearGradient
        style={{borderRadius: 20}}
        colors={bgColors}
      >
        <View style={styles.card}> 
          <View style={styles.info}>
            <Text style={[{ color: textColor}, styles.title]}>{title}</Text>
            <Text style={[{ color: textColor }, styles.price]}>{'R$' + price}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: 200,
    height: 210
  },
  card: {
    width: 200,
    minHeight: 200,
    maxHeight: 200,
    padding: 10,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 110,
    position: 'absolute',
    top: -10,
    zIndex: 1
  },
  info: {
    width: '100%',
    marginBottom: 10
  },
  title: {
    fontSize: 20
  },
  price: {
    fontSize: 32,
  }
})

export default Card