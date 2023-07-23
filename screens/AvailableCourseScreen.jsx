import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import data from '../data.js'

const AvailableCourseScreen = ({navigation}) => {
  return (
    <View>
      {
        data.map((data)=>
          <TouchableOpacity style={styles.box} key={data.id}
            onPress={() => navigation.navigate('VideosList', { id: data.id })}
          >
            <Text style={styles.text}>{data.CourseName}</Text>
          </TouchableOpacity>
        )
      }
    </View>
  )
}

export default AvailableCourseScreen

const styles = StyleSheet.create({
  box: {
    height:80,
    borderColor:"#8bd6b3",
    marginTop:50,
    borderWidth:3,
    // width:width*1,
    marginLeft:"auto",
    marginRight:"auto",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    width:"80%"
  },
  text:{
    fontWeight:"bold",
    // fontSize:height*0.03
  }
})