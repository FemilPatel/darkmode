import React, {PureComponent} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class ProfileScreen extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <Text style={{color:'#fc913a'}}> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
