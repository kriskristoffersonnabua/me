import React, { Component } from 'react'
import logo from './logo.svg'
import Header from './components/header/'
import Footer from './components/footer'
import Skills from './components/skills'
import { Helmet } from 'react-helmet'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<title>KC | CV</title>
					<link
						rel="shortcut icon"
						href={require('./assets/favicon.ico')}
					/>
				</Helmet>
				<Header />
				<img
					className="img-background"
					alt="me"
					src={require('./assets/background-picture.jpg')}
				/>
				<Skills />
				<span className="divider" />
				<Footer />
			</div>
		)
	}
}

export default App
