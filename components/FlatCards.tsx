import { DynamicColorIOS, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.cardText}>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: 'pink',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        width: '20%',
        height: 100,
        borderRadius: 4,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    cardText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    cardOne: {
        backgroundColor: '#dc143c',
        textDecorationColor: 'black',
    },
    cardTwo: {
        backgroundColor: '#7fff00'
    },
    cardThree: {
        backgroundColor: '#00ffff'
    },
})