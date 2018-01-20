import React from 'react'
import { Text, SafeAreaView } from 'react-native'

const Header = (props) => {
	const {textStyle, viewStyle} = styles
	return (
		<SafeAreaView style={viewStyle}>
			<Text style={textStyle}>{props.title}</Text>
		</SafeAreaView>
	)
}
const styles = {
	textStyle: {
		fontSize: 20,
		paddingBottom: 20,
	},
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f8f8f8',
		elevation: 2,
		position: 'relative',
		width: '100%',
		padding: 0,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
	},
}
export { Header }
