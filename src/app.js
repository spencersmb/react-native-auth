// @flow
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Button, Spinner } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

const config = {
	apiKey: 'AIzaSyDFXLrG1Kay51WbojYP9YqsmhYoONbjbO0',
	authDomain: 'react-native-auth-906be.firebaseapp.com',
	databaseURL: 'https://react-native-auth-906be.firebaseio.com',
	projectId: 'react-native-auth-906be',
	storageBucket: 'react-native-auth-906be.appspot.com',
	messagingSenderId: '570386236585',
}

type State = {
	loggedIn: boolean | null
}

class App extends Component<{}, State> {
	state: State = {loggedIn: null}

	componentWillMount () {
		firebase.initializeApp(config)

		// Observer for auth
		firebase.auth().onAuthStateChanged((user) => {
			user ? this.setState({loggedIn: true}) : this.setState({loggedIn: false})
		})
	}

	logOut () {
		firebase.auth().signOut()
	}

	renderContent () {
		switch (this.state.loggedIn) {
		case true:
			return (
				<View style={{height: 40}}>
					<Button onPress={this.logOut.bind(this)}>
						<Text style={styles.textStyles}>Log Out</Text>
					</Button>
				</View>
			)
		case false:
			return <LoginForm/>
		default:
			return <Spinner size='large'/>
		}

	}

	render () {
		return (
			<View style={styles.containerView}>
				<Header title='Auth'/>
				{this.renderContent()}
			</View>
		)
	}
}

const styles = {
	textStyles: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
		height: 40,
	},
	containerView: {},
}
export default App
