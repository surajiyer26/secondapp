import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://static.hiphopdx.com/2024/01/kanye-west-pulls-up-on-jpegmafia-following-his-lab-surgeon-rant-1200x675.jpg'}}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>BREAKING, VULTURES</Text>
          <Text style={styles.cardLabel}>Peggy collabs with Ye!!</Text>
          <Text style={styles.cardDesc}>In Kanye West's (populary called 'Ye'), new album, it has been officically declard that JPEGMafia is one of the official producers!</Text>
          <Text style={styles.cardFooter}>For more details, follow @surajiyer on X</Text>
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
  card: {
    width: 380,
    height: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'black',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    }
  },
  cardImage: {
    height: 200,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 18,
    marginTop: 4,
    marginBottom: 4,
    flexShrink: 1,
  },
  cardFooter: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 'auto',
    paddingBottom: 4,
  }
})