import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = (props) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator
				size={props.size || 'large'}
				color={props.color || '#0000ff'}/>
		</View>
	)
}
const styles = {
	spinnerStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
}
export { Spinner }
