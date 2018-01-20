import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
  const _onPressButton = () => {
    props.onPress()
  }
  return (
    <TouchableOpacity style={styles.buttonStyles} onPress={_onPressButton}>
      <Text style={styles.textStyles}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyles: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#007aff',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  }
}

export default Button