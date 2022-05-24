import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

interface PropTypes {
  bgColors: Array<string>,
  image: string,
  title: string,
  originalPrice: number,
  price: number
}

const CardDestaque = ({ bgColors, image, title, originalPrice, price }: PropTypes) => {
  return (
    <View style={styles.cardWrapper}>
      <Image 
        source={require('../../assets/images/' + image)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {

  }
})

export default CardDestaque