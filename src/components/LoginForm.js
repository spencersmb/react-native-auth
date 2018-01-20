import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Field, Spinner } from './common'

const handlePromise = promise =>
	promise.then(data => ({
		ok: true,
		data,
	})).catch(error => Promise.resolve({
		ok: false,
		error,
	}))

class LoginForm extends Component {
	state = {email: '', password: '', error: '', loading: false}

	async onPressLogin () {
		const {email, password} = this.state
		this.setState({error: '', loading: true})

		setTimeout(async () => {

			try {
				await firebase.auth().signInWithEmailAndPassword(email, password)
				this.onLoginSuccess()

			} catch (e) {
				console.log('e', e)
				// if the user cant login try creating a user
				//alert with notification to create account?
				const {ok, error, data} = await
					handlePromise(
						firebase.auth().createUserWithEmailAndPassword(email, password))
				if (ok) {
					console.log('data', data)
					this.onLoginSuccess()
				} else {
					console.log('error', error)
					this.onLoginFail()
				}
			}

		}, 1500)

	}

	onLoginSuccess () {
		this.setState({email: '', password: '', error: '', loading: false})
	}

	onLoginFail () {
		this.setState({error: 'Authentication Failed', loading: false})
	}

	onEmailTextChange (text) {
		this.setState({email: text})
	}

	onPasswordTextChange (text) {
		this.setState({password: text})
	}

	renderSpinner () {
		return <Spinner size='small' color='#fff'/>
	}

	render () {
		const {errorStyles, textStyles} = styles
		return (
			<Card>
				<CardSection>
					<Field
						label='Email'
						placeholder='user@gmail.com'
						value={this.state.email}
						onTextChange={this.onEmailTextChange.bind(this)}/>
				</CardSection>
				<CardSection>
					<Field
						label='Password'
						type='password'
						secure={true}
						placeholder='password'
						value={this.state.password}
						onTextChange={this.onPasswordTextChange.bind(this)}/>
				</CardSection>
				<Text style={errorStyles}>{this.state.error}</Text>
				<CardSection>
					<View
						pointerEvents={this.state.loading ? 'none' : 'auto'}
						style={{
							flex: 1,
							height: 40,
						}}>
						<Button onPress={this.onPressLogin.bind(this)}>
							{this.state.loading ? this.renderSpinner() :
								<Text style={textStyles}>Log In</Text>}
						</Button>
					</View>
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorStyles: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
		height: 20,
	},
	textStyles: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
	},
}

export default LoginForm
