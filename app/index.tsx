import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* first container  */}
      <View style={styles.topcontainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {
            [3, 1, 2,].map((item, index) => {
              return <View key={index} style={[styles.mainCard,item !== 1 && {marginTop:20}]}>
                <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/023/056/329/small_2x/programmer-people-working-laptops-or-smartphones-with-ai-artificial-intelligence-software-engineer-coding-on-laptop-computers-with-technology-icons-and-binary-code-big-data-ai-bot-digital-machine-photo.jpg" }} style={styles.mainCardImage} resizeMode='cover'
                />
                <Text style={styles.mainCardTitle}>Aditya</Text>
                <View style={styles.mainCardRankContainer}>
                  <Text style={styles.mainCardRankContainerText}>{item}</Text>
                </View>
              </View>
            })
          }
        </View>


      </View>
      {/* second Container  */}
      <FlatList data={[1, 2, 3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20]}
        renderItem={({ item, index }) => {
          return <View style={styles.card}>
            <View style={styles.cardDataContainer}>
              <Text style={styles.cardIndex}>{index + 1}</Text>
              <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/023/056/329/small_2x/programmer-people-working-laptops-or-smartphones-with-ai-artificial-intelligence-software-engineer-coding-on-laptop-computers-with-technology-icons-and-binary-code-big-data-ai-bot-digital-machine-photo.jpg' }} style={styles.cardImage} resizeMode='cover' />
              <Text style={styles.carTitle}>Aditya choudhary</Text>
            </View>
            <View style={styles.cardRankContainer}>
              <Text style={styles.cardRankTitle}>3454,777</Text>
            </View>
          </View>
        }}
      />

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272C35",

  },
  topcontainer: {
    backgroundColor: "#1A1F25",
    paddingTop: 30,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
    paddingBottom:50,


  },
  headerTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 21,
    fontWeight: "bold",


  },
  mainCardContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center"

  },
  mainCard: {
    backgroundColor: "#272C35",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    gap: 15,

  },
  mainCardImage: {
    width: 70,
    height: 90,
    borderRadius: 20,
  },
  mainCardTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: '600',


  },
  mainCardRankContainer: {
    backgroundColor:"orange",
    width:25,
    height:25,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    position:"absolute",
    bottom:-15,

  },
  mainCardRankContainerText: {
    color:"white",

  },
  card: {
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between"


  },
  cardDataContainer: {
    flexDirection:'row',
    alignItems:"center",
    gap:10,

  },
  cardIndex: {
    color:"white",

  },
  cardImage: {
    width:30,
    height:30,
    borderRadius:50,
    marginLeft:10,

  },
  carTitle: {
    color:"white",
    fontSize:17,

  },
  cardRankContainer: {},
  cardRankTitle: {
    color:"orange"
  }

})