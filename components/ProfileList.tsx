import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ProfileList() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  const codingProfiles = [
    {
      uid: 1,
      name: 'Codeforces',
      link: 'https://codeforces.com/profile/surajiyer',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABj1BMVEX///8fisv/ySTEDhb+/v7/yyQbebLQ1dkRPFUfiMgfis26wcYjQFTvvSK9lRu0jBfw7+sAAACckXN1WABxVgWil3wHQGEHRmq3DBTz7+9lAADs6OmqDBKLaGqkf3/ltCEabJ0XYpFzAgC5rKySbwAdgb3k6OuYq7aVhlzj4dtbcoJlHx8QEBAARnB4ZS7LEBidAAXSpR22trZHR0fJyckVFRUfHx9XV1cwMDCqqqp7WFleXl4nJyd2dnaNjY2gCxFaAACenp6AgIBoaGjO2fHn7fU3NzePfn+PAABHAAA6AAB+WFlKSkrO2PHf5PFtgLdVdbN8krpadam5yOlbcrZNaa59i5M/WWkiS2YAJkNYZW4OIC8TWoM9SlEAL0olMTsaOElwZkFlWS2AbTG7s57Jx75+dFlTPwB+ZRl5bUZENQBPRSmKaxA9LweMhXFxPT5XIyNbNzexmZkAEyV4NjikuMyst9dvjbtMcKVYbLWXosuYrdV2hcFzjLNbZ5pRd5x6lKprhMWBms6ps9+uv+JOBMCFAAANvUlEQVR4nO2dj3/S1hbAo17NardZNteaMp+21U429lxp+GWBCU2wTsgv6Pb87fbm3PN17tcraaH4LPMPf+fcQAgB+gw1EkLOpoPLzcn53vPjnmSfT8IQvwszbgPcFobBP34W8OG4TXBZyDT40P+E4zbBZZkKH/qfcNwmuCxT4UP/E47bBJdlKnzof8Jxm+CyTIUP/U/ommKnl6ruWOKeDzn+M0fCcu7Y4Roh++13780vvLn847tvV10xxKXYILMP784/WLr85rL05fznrBu2uOJDwrD37i4snbnqRM4svfc568J6uxOlXO7+owdnTjiSmTMLT/Iu2OJGlBKGf/jn/NJVZ4Rnrz549J0LqeiGDwkz+/j+wuUZh4QzS/NP2Ldti3uEdx+cmTnrkPCyW4Qu6Jx9DGl41jHhwnuT48Mnj5ZG8OFEEc4DoSNANwld0Dn7/rzffRgQvltCF3QahI4AJ9KH/if0fZT6e8efkij1DKELOj2Wh/6vNEGUjqDTY4T+96H/CV3Q6TFC//vQ/7uFCzoDH/qF0DM+dEFn4EO/EHrGhy7o9Bih/33o/zx0QafHCI+J2H+4xwlJxJHMDdTpsTzs5fvk+x/+/ubyz2s/Rvqc6GUfkqc/PTu/c8WJ/HztqR3Ry4RPv3925cO1S07k3Mf/inidsPslAoCXTp52JB+ce/Yi7HFCE5H8+Pz8mkPA0yfXzv/bFqfeJZx78fzKJbDZmazt/PJirqdeeY7Q/Dz34tm5D5wCnrx05bnXCS0+PP+hY8LTlyARJ4bwo49HIjw/hNB7O/7IhJ/43odTS+j/KPUMYRClk09ofvYtoecrjfPnREwa4fFkEqI0zK84EZ4jvdZ4vdIQ/uKvXziQ336/xb8rwrcSpWTl1+WtrxzI1vLtGyvvKErfBiFZ+WL5wnVHcmpr8TeLF70dpYSJ/L746SmHcuHrmxcjFh2eJiQrt7ecAgLi1m8r3XszXq6lhAnfuvn1dceE1y8s/sF1lXjYh0B40XmQohOX/8Z1TJoKQk9HaeDDgDCI0oBwQghdi9Jj96WBD8dO6Bkfuhal/veh/wmDKJ18H/qfMIjSyfeh/wmDKJ18H/qfMIjSyfdhQPjOCIMoHZnQM5UmiNLJJ/S/D/2fh65FqWcIgyidfMIgSgNC7xMGUToyoSPAgPA4hEGUTr4P/U/oWpR6htD/+6H/CYMoDQi9T+halHomD/1fafxPGETpyISOACeS0DM+dC1K/e/DgPCdEQZRGhB6n9C1KPXMbuF/H/qf0LUo9Qyh/33of8IgSgNC7xO6FqXBjj/5hJ7xoRtR+nbeYfn2fTjikyEniXCEp3tOAmE3SukTWp0TDni65+OR3iVrfx8wEt4cmdBUYvXhLztrDp9Be/rkpSvP+nzI0zceO/PhiZmlR+/bnzHE3Rrl+TSnLiz+QbrWWJ8j/Mt5CFOHsrbzQ99zhCP3/lxw+OJxIHxw9x7H9ApZ+WbZsROvn/rqP7yVsPtx7qfnO2sfOItSCNJP+h7MTmIP7y5dPTHjQE7MXH70kLcrYriLt5c/veDQg18tdx/AY/Uh/PfpT892zq05Evo8b9JnWP4+ZKIjWVp4P831a+Jv3F7e+tqRbC3esTx/+7jPZN/5+Zr9geUGYu7Jo/kvHcjCPAL2C+FvfHN7cXF5efEouWmV2xetsWB/+8Pcjx9dcyIfPR307gBUzOY/dyLffjbsiYLcyq0bN+7cuXMD/3kDuRXrCYX+dyPMOZO+sDIVcauOZKgi0BR2Ipy97r39d5SYqp1NHzbfsX19hP2nGvVBmsdQdLQqZ5remQ89IlNBOG4TXJap8KH/Ccdtglsy4ArY+uv/3wsmRYYR0r98gTgkSjs+9AHjIB9CH8jH0ul0jA1zzMRTDiDkYoXNUjGVKq5vZPO2N3I5z84B08nRPw/R80YzB8yyv5UM+DYTIVPipRzPcWZVOuJsx0jawUdaFJL+oaPUHd2XknQpHgVJZFKpTDwaimY28rHOFTPh4DrGBGYGdru2JphbDRP7mNhVwInisEN7jSY4ceCJ4ae2RTZ1gwjhS6wYjcdD8WQO8jC/WYyHADZrXMWTCJ8vZLO5PB82PM/xsa7wq8YVOsenLaOxfGGWEEloS7mMf+1KRqkWhV2QitAhFjuT6DSxSy4KlRpIRRJp8SOiYJVyTSDGLGHXnNVDaF0qvhSKx+MbsTAd5dh0MhEq0ftWhM2tZ6IYudFEMk+ZuVw8nuhIplSg87i8ZTCRiMbThJRVXdZ1WT48PJRlWdPRIiI0dE3b21MUWa1J1HIJpqEY0/RaeyGkmi4r1e3tarUzU1I1GRUeHtDZSg0GxYqqa3swS9brFWm1x20WRLQ5Htq03IrjN6N5YnzIYF7GIYZD0VQWVZA0utiSs3gciSWsg6FEDE0HEEXZBlH2lG0ZCMWKrilVRQPb9/eVuoArLTZgWpXOQtFUCc0T6vBRw4HqdvUQrIeJ6h5dHJyK8yswVJO3QdvBgaztaXKzZomAHkI+GY1HMzyxdDwxI0YjG5ieqY3NzWQKPsRzYTgwlolGM+tUMqEoLA2LSwFxnimut6WYSsPpwUhZVtVWSwXRwYekIlfBJ61Go94CxGpdwrPVAPrgQNd1mAToGvpGalVhIZr1BkyVlW1Fr7X16agP/9LlXcIIOnVxpVKrN7W9lzVxcJQy6RRkYaH35QmYxiRcAMcUCzzUmTCfhWVI5DkGCUNJfhXfZclnE/FovBCmhNFNvvOOSzbGGxapktgRViRlGbBakGtQQWpyFRDBJNIAwEp7EoxWVREOBRfrNRFLiCjtqv99BWshtpSqLJj6JImQulaVyyL6Cw7Vm1JPHlp48glwSnrAjQ1agHJGdhJ2A2I1yRqEm6vGjHAWSm+Jp4ShbLid14SuECUUOyfE4bpSBUBjBAIW1h/jtIaGt08pUEIiHO5X5dedYwn7iiUGoS5Z9DFEre63pE7FKu8Ou9dGckBYjA26wQvxWGLpDzAfeKOZmEG40bkfzJfgWFgdPoU+xG0lzPNGfQXCKpwfxbinJjYVRRc68SPuQprVOBqlcsXYAaS/IEuBsAYx2uiGHMeiRlGFKBUMfRK1nzS06mGjIoGItg2wt5YOIwwXoCjmzEPCWUjKvI0QBzMFjgHCeCq5CbJRzBp3LpHwEHIOpLmLZ5Tk6nbXbiJA0sFX9GF7WoNmX42IdcO9FnspoabgxHq9obbVCDrWJg2zvV4TuksyKEpTA6KUEubb49D34EpAusYSFkIO52QNQto0QM0ttH3Y2IO6QgvkyxqeUTisbte6d7ilLiGdBqUTPmhQfmhNEez2ICHMowW2btCI4H+o07guwGkpNDbCNARjImdr5IhJ2DmEEuZshOFC3CCElE1kQFIJ/EpPX8ciqeOWqFHC8qHVh0iIoYhWUhNxZzhs4d43hLClYTFtNnVZaxPirqlpWJbxYMWSiL21lO4W66w1Kvg8VI1wDv3TnksYdiNKXdpLuAnJmSNIGE2meT7Gx3J5Mw+VVhmTRMJ+hlCkumTuSWWZ5iESyg3oZ1T4btQhPFKzmkv9QWspTTqpXDZbOUmovP7rr1YL2wNVMo/p2/EBsRAxRvEHNpuBLZtgpSny7UKDm0o01VNp4N/YupHDSJgN096RC5MOIVQaq4lNRdN3O+oQA/sSrDQHZSSGpIKSgz+/VuhatI9jVmdXmZ5aSjo9KUeM7lWScKvVhcGE0LWth6BeZHljkHB8NhPaYCEeizCeZdu7BXgaRnt3C2gJ4rA5moTWVUdCbFDM3hlKn6apbStw66OhKOJ+WGZogwIrQBHQ27IZ0OLuq1m6W1S3deuWB4ljcWa9ui/3EDIWIZCJUCZS2TzPQpRtpELRUAL2cQ5qUDxeyrORVT6Pq1BMEyNKSzEWhM8lobxkcpxBuEEH6Q/5NIQfVMSWZD0TdJZg+WvsAoQ6rLnRWgKhXKYkDc1wndHnKHqF9gsVVd5rCsaKHUCUGtu9JIFjJVVuYA8AXhQO9m2EPYhcDgyEUE2tJ5PQacPnYiGNmZhNWLu2BGan0bWVkiClFParm+hkrKXGIJUUrE8/IRFUKCqHrXodujYAbNN0dnzoreEjrYhQpaB46CrMhPSsdro2UEhbQNoKQhuAW6quNuDa4hUcCnVrGCHsdelSyCKpbMz431VsIWMZzdHbG+modWoiaXTe8VCPACHYqzR7CAFRV/b3aY8NIdqQ2tvmNu74jNHAKXINk0uCdhS3mZcvoSsFR0HLIOnb+3gw9PG0/VYl7lWTzlJwy8CefVgtpSPhPL2JAbKezPHmrgU5aQwXS3QUFiO3bkopWTAulMP59R7JFMJk9hWs9azt0luq1PFiCdpsuL4zrs/qKnyhTQKp6S21qZY5et3XUOlVlV43LqjAw81WW3T4I9clDE6YdUCnNXaH7/h0gOHCLN6ISqf5CEcs9xDawzG2Xb84ljeFjQwYRIE8hNbK6KZsSykaV8bmLzSnOheFkuULTMRrYqF9AU9EqUeECr1qxFko/VfAfWdmzPsEjP2n3tGB9xzstzG4Pi22ucN/Npuoo+9uEvNG0iB9A++XDr5ZwnQWY8j9kv6jzdEhJPaTWL71/nT0KYbNMgmPWkQfyFQQjtsEl2UqfOh/wnGb4LJMhQ/9TzhuE1yWqfCh/wnHbYLLMhU+9D/huE1wWabCh/4nHLcJLstU+NDv8j8RzTRSudStxgAAAABJRU5ErkJggg=='
    },
    {
      uid: 2,
      name: 'CodeChef',
      link: 'https://www.codechef.com/users/surajiyer',
      image: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb'
    },
    {
      uid: 3,
      name: 'LeetCode',
      link: 'https://leetcode.com/surajiyer/',
      image: 'data:image/png;base64,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'
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Profile List</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {codingProfiles.map(({uid, name, link, image}) => (
          <View key={uid} style={styles.codingProfile}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: image}}
                style={styles.imageStyle}
              />  
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.nameStyle}>{name}</Text>
              <TouchableOpacity onPress={() => openWebsite(link)}>
                <View style={styles.linkBody}>
                    <Text style={styles.linkText}>
                        Check It Out
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View> 
        ))}
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
      height: 'auto',
    },
    codingProfile: {
      height: 'auto',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: 'black',
      padding: 10,
      margin: 10,
      borderRadius: 14,
    },
    imageContainer: {
      height: 'auto',
      width: 100,
      justifyContent: 'center',
    },
    imageStyle: {
      height: 80,
      padding: 10,
      margin: 12,
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    nameStyle: {
      padding: 8,
      paddingBottom: 14,
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
    },
    linkBody: {
      backgroundColor: 'pink',
      borderRadius: 12,
      padding: 10,
    },
    linkText: {
      color: 'black',
      fontWeight: 'bold',
      padding: 12,
      fontSize: 20,
    }
})