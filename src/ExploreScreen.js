import React, {PureComponent} from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class ExploreScreen extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <Text style={{color:'#d02860'}}> textInComponent </Text>
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
