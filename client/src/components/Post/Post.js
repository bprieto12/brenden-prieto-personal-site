import React, { Component } from 'react';
import "./Post.css";


class Post extends Component {
	render() {
		return (
			<div className="Post">
				<div className="head">
					<p className="category">{this.props.category}</p>
					<p className="date">{this.props.date}</p>
				</div>

				<h3 className="PostTitle">{this.props.title}</h3>
				<img src={this.props.img} />
				<p className="PostBody">{this.props.body}</p>
			</div>
		);
	}
}

export default Post;