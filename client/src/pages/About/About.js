import React, { Component, Fragment } from 'react';
import PageStyle from '../../hoc/PageStyle';
import './About.css';
import globalStyles from '../../global/styles.module.css';

class About extends Component {
	render() {
		return (
			<PageStyle>
				<div className="Intro">
					{/* <div className="PersonalPhoto">
						<img src="https://via.placeholder.com/150" />
					</div> */}
					<div className="AboutSummary">
						<h2 className={globalStyles.primaryColorDark}>About Me</h2>
						<hr />
						<p className={globalStyles.primaryTextColor}>
							Hi, I'm Brenden Prieto.  I'm a web developer and data analyst living in Southern California, and  
							I'm passionate about making technology simple, useful, and attractive.  
							I graduated from UC Berkeley with a Bachelors in Electrical Engineering and Computer Science.
							And on a personal note, I'm a former pun addict now struggling with a love-hate relationship with coffee.
						</p>
						<p className={globalStyles.primaryTextColor}>
							Over the years, I've learned and used several computer languages, but recently I've been focusing on Javascript and Javascript Frameworks like ReactJS and server-side technologies like NodeJS.
						</p>
					</div>
				</div>
			</PageStyle>
		);
	}
}

export default About;