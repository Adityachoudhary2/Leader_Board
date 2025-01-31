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
            [3, 1, 2].map((item, index) => {
              return <View key={index} style={styles.mainCard}>
                <Image source={{uri:""}} style={styles.mainCardImage} resizeMode='cover' 
                />
                <Text style={styles.mainCardTitle}>Aditya</Text>
                <View style={styles.mainCardRankContainer}>
                  <Text style={styles.mainCardRankContainerText}>1</Text>
                </View>
              </View>
            })
          }
        </View>


      </View>
  {/* second Container  */}
       <FlatList data={[1,2,3]}
       renderItem={({item,index})=>{
        return <View style={styles.card}>
          <View style={styles.cardDataContainer}>
            <Text style={styles.cardIndex}>{index + 1}</Text>
            <Image source={{uri:''}} style={styles.cardImage} resizeMode='cover'/>
          </View>
          <View style={styles.cardRankContainer}></View>
        </View>
       }}
       />

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {

  },
  topcontainer: {},
  headerTitle: {},
  mainCard: {},
  mainCardContainer: {},
  mainCardImage: {},
  mainCardTitle: {},
  mainCardRankContainer: {},
  mainCardRankContainerText: {},
  card: {},
  cardIndex: {},
  cardImage: {},
  carTitle: {},
  cardDataContainer: {},
  cardRankContainer: {},
  cardRankTitle: {}


})