import React, { Component } from 'react';
import styles from "./ProjectPreview.module.css";
// <img alt={this.props.project_details.title} src={this.props.project_details.img_url} />
import { withRouter } from 'react-router-dom';
import globalStyles from '../../../global/styles.module.css';

class ProjectPreview extends Component {
	handleRedirect = (toAddr) => {
		console.log("in handle redirect: ", toAddr);
		this.props.history.push(toAddr);
	}

	render() {
		return (
			<div onClick={() => this.handleRedirect(`/projects/${this.props.project_details["project-name"]}`)} className={styles.ProjectPreview}>
				<div className={styles.tint}>
					<img alt={this.props.project_details.description} src={this.props.project_details.img_url} />
				</div>
				<div className={styles.PreviewDetails}>
					<h6 className={[styles.ProjectTitle, globalStyles.primaryColorDark].join(' ')}>{this.props.project_details.title}</h6>
					<div>
						
						{this.props.project_details.link !== "" ? <div style={{display: "inline-block", marginRight: 12}}><a href={this.props.project_details.link}>website</a></div> : ""}
						<div style={{display: "inline-block"}}><a href={this.props.project_details.github}>repo</a></div>
					</div>
					<div className={[styles.Content, globalStyles.primaryTextColor].join(" ")}>
						<p>{this.props.project_details.description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(ProjectPreview);