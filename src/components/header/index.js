import React from 'react'
import './header.css'

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<img
					className="img-logo"
					alt="kc logo"
					src={require('../../assets/KcLogo.png')}
				/>
				<div className="header-title">
					Kris Kristofferson Casio Nabua
				</div>
			</header>
		)
	}
}

export default Header
