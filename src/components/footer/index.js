import React from 'react'
import './footer.css'

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="socialmedia-accounts">
					<a
						href="https://www.facebook.com/kriskristoffersonnabua"
						target="_blank">
						<img
							className="social-media-icons"
							src={require('../../assets/socialmedia/facebook.png')}
							alt="facebook"
						/>
					</a>
					<a
						href="https://github.com/kriskristoffersonnabua"
						target="_blank">
						<img
							className="social-media-icons"
							src={require('../../assets/socialmedia/github.png')}
							alt="github"
						/>
					</a>
				</div>
				<div className="emailcontact">
					<span>nabua.kristofferson@gmail.com</span>
				</div>
			</footer>
		)
	}
}

export default Footer
