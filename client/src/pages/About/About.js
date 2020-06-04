import React, { Component, Fragment } from 'react';
import PageStyle from '../../hoc/PageStyle';
import './About.css';


class About extends Component {
	render() {
		return (
			<PageStyle>
				<div className="Intro">
					{/* <div className="PersonalPhoto">
						<img src="https://via.placeholder.com/150" />
					</div> */}
					<div className="AboutSummary">
						<h2 style={{color: '#3AAFA9'}}>About Me</h2>
						<hr />
						<p>
							Hi, I'm Brenden Prieto.  I'm a web developer and data analyst living in Southern California, and  
							I'm passionate about making technology simple, useful, and attractive.  
							I graduated from UC Berkeley with a Bachelors in Electrical Engineering and Computer Science.
							And while that might suggest I've always loved technology
							growing up, my home computer intimidated me. 
							Today, my guiding line for every project is, "what would make young me feel comfortable using this" 
							and my passion is the journey to find the answer.
						</p>
					</div>
				</div>
			</PageStyle>
		);
	}
}

export default About;