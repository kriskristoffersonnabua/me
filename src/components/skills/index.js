import React from 'react'
import './skills.css'

class Skills extends React.Component {
	render() {
		return (
			<div class="skills-container">
				<img
					className="skill-icon logo-spin"
					alt="vim"
					src={require('../../assets/skills/vim.png')}
				/>
				<img
					className="skill-icon logo-wiggle"
					alt="npm"
					src={require('../../assets/skills/npm.png')}
				/>
				<img
					className="skill-icon logo-spin"
					alt="js"
					src={require('../../assets/skills/js.png')}
				/>
				<img
					className="skill-icon logo-wiggle"
					alt="html"
					src={require('../../assets/skills/html.png')}
				/>
				<img
					className="skill-icon logo-spin"
					alt="react"
					src={require('../../assets/skills/react.png')}
				/>
				<img
					className="skill-icon logo-wiggle"
					alt="nodejs"
					src={require('../../assets/skills/nodejs.png')}
				/>
			</div>
		)
	}
}

export default Skills
