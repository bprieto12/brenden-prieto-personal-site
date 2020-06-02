import React, { Component } from 'react';
import styles from "./ProjectPreview.module.css";
// <img alt={this.props.project_details.title} src={this.props.project_details.img_url} />

class ProjectPreview extends Component {
	render() {
		return (
			<div className={styles.ProjectPreview}>
				
				<img alt={this.props.project_details.description} src={this.props.project_details.img_url} />
			
				<div className={styles.PreviewDetails}>
					<h6 className={styles.ProjectTitle}>{this.props.project_details.title}</h6>
					<div className={styles.Content}>
						<p>{this.props.project_details.category}</p>
						<p>{this.props.project_details.description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectPreview;