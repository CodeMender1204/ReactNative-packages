import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Home = () => {
  return (
    <SafeAreaView>
        <MaterialIcons
          name="qr-code-scanner"
          size={18}
          color={"red"}
          style={ {marginVertical:50}}
        />
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})