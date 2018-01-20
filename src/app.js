// @flow
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from './components/Header'

type Album = {
	title: string,
	artist: string,
	image: string,
	thumbnail_image: string,
	url: string
}

class App extends Component<{}, null> {
	render () {
		return (
			<View>
				<Header title='Auth'/>
				<Text>Hello World</Text>
			</View>
		)
	}
}

export default App
