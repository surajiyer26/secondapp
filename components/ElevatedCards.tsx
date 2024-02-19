import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
      <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>
            </ScrollView>
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
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 8,
        color: 'black',
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 20,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    cardText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
})