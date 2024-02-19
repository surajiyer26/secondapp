import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
      Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                Meet the developer, Suraj Iyer
            </Text>
        </View>
        <Image
            source={{uri:'https://media.licdn.com/dms/image/D4D03AQHPjBYoXiTIIA/profile-displayphoto-shrink_400_400/0/1706794512809?e=1714003200&v=beta&t=wjtb89H-cJyJZrZO8VwmCMSd11EvPLA0zZ-T4h8YpBs'}}
            style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
            <Text numberOfLines={3} style={styles.cardBodyText}>
                Competitive Programmer Learning Different Techs. This is an example of the numberOfLines prop which limits the text to x lines, thereafter adding dots to it.
            </Text>
        </View>
        <View style={styles.cardFooterContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/suraj-iyer-524342228/')}>
                <View style={styles.cardFooterLeft}>
                    <Text style={styles.cardFooterText}>
                        Linkedin
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/suraj-iyer-524342228/')}>
                <View style={styles.cardFooterRight}>
                    <Text style={styles.cardFooterText}>
                        Twitter / X
                    </Text>
                </View>
            </TouchableOpacity>
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
        height: 'auto',
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: 'black',
    },
    cardElevated: {
        elevation: 4,
        shadowOffset: {
            height: 4,
            width: 4,
        },
        shadowOpacity: 0.4,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    cardImage: {
        height: 300,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 4,
    },
    cardBodyContainer: {
        alignItems: 'center',
        padding: 4,
    },
    cardBodyText: {
        textAlign: 'center',
        fontSize: 16,
    },
    cardFooterContainer: {
        alignItems: 'center',
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cardFooterLeft: {
        backgroundColor: 'pink',
        borderRadius: 12,
        margin: 10,
    },
    cardFooterRight: {
        backgroundColor: 'pink',
        borderRadius: 12,
        margin: 10,
    },
    cardFooterText: {
        color: 'black',
        fontWeight: 'bold',
        padding: 12,
        fontSize: 20,
    }
})