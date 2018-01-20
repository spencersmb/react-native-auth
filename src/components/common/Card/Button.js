import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
	const _onPressButton = () => {
		if (props.disabled) {
			return
		}
		props.onPress()
	}
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={styles.buttonStyles}
			onPress={_onPressButton}>
			{props.children}
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
		paddingBottom: 10,
	},
	buttonStyles: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#007aff',
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5,
	},
}

export { Button }
