import React, { Component, Fragment } from 'react';
import axios from 'axios';
import "./ProjectsHome.css";
import ProjectPreview from './ProjectPreview/ProjectPreview';
import PageStyle from '../../hoc/PageStyle';
import globalStyles from '../../global/styles.module.css';

// <div className="TopicNav">
// 						<ul style={{listStyleType: "none"}}>
// 							<li style={{textDecoration: 'none', color: 'black'}}><b>Topics</b></li>
// 							<li>Automation</li>
// 							<li>Data Analysis</li>
// 							<li>Data Visualization</li>
// 							<li>Data Science</li>
// 							<li>UI/UX Design</li>
// 						</ul>
// 					</div>
class ProjectsHome extends Component {
	state = {
		projects: []
	}

	componentDidMount() {
		// let url = new URL('http://www.airnowapi.org/aq/observation/zipCode/historical');
		// url.searchParams.set('format', 'application/json');
		// url.searchParams.set('zipCode', 92865);
		// url.searchParams.set('date', '2020-01-19');
		// url.searchParams.set('distance', 25)
		// url.searchParams.set('API_KEY', '415756C8-4AE4-49DD-A14C-82E18507334E');

		axios.get('./data/project-descriptions.json').then(response => {
			console.log(response)
			this.setState({projects: response.data.data});
		});
	}

	render() {
		return (
			<PageStyle>
				{/* <div className="ProjectsHomeBody"> */}
					{/* <div className="ProjectContent"> */}
						<h2 className={globalStyles.primaryColorDark}>Projects</h2>
						<div className="Projects">
							{this.state.projects.map(project => {
								return <ProjectPreview key={project.id} project_details={project} />;
							})}
						</div>
					{/* </div> */}
				{/* </div> */}
			</PageStyle>
		);
	}
}

export default ProjectsHome;