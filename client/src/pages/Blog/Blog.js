import React, { Component } from 'react';
import './Blog.css'
import Post from '../Post/Post';
import PageStyle from '../../hoc/PageStyle';

class Blog extends Component {


	componentDidMount() {

	}

	render() {
		let posts = [];

		return (
			<PageStyle>
				<div className="Blog">
					<div className="TopicNav">
						<ul style={{listStyleType: "none"}}>
							<li style={{textDecoration: 'none', color: 'black'}}><b>Topics</b></li>
							<li>Data Analysis</li>
							<li>Data Visualization</li>
							<li>Data Science</li>
							<li>UI/UX Design</li>
						</ul>
					</div>
					<div className="Posts">
						<h3>Posts <span style={{color: 'gray'}}>(ALL)</span></h3>
						<hr />
						<Post 
							title="Clustering Methods for Outlier Detection"
							date="2/1/2020"
							img="./img/scatter.png"
							category="Data Science"
							body="In certain applications, traditional methods of outlier detection lead to imperfect results.  For auction transactions, a data set full of human randomness, visual inspection of transactions on a scatter plot will point out unusable transactions often better than statistical methods such as Studentized Residuals.  However, visualizing transactions for all products is time consuming and expensive.  In this post, I dive into some of the clustering methods that approximate the visual inspection to identify unusable transactions automatically." />
						<hr />
						<Post 
							title="Is it worth the effort? An application of Convex Optimization in the workplace"
							date="2/1/2020"
							category="Data Science"
							img="./img/convex_optimization.jpg"
							body="In a buying business, such as in the used vehicle market, catalogs often exist that approximate the value of an item and help businesses and consumer make informed decisions.  Savvy business owners understand that, while these buying books are a good guideline, they can miss the mark when an item falls out of the ordinary condition. To mitigate losses, business owners sometimes hire auditors to review the price guideline along with the item they intend to purchase to come to a new price based upon the " />
						<hr />
						<Post 
							title="Vehicle Trim Classification using Random Forest Classifier with VIN features"
							date="2/1/2020"
							category="Data Science"
							img="./img/vin.jpg"
							body="<em>tl;dr: It doesn't work for Ford Trucks.</em>  Vehicle manufacturers use the VIN to uniquely identify a vehicle.  The first 10 digits from left to right are well defined with each digit telling representing specific information.  For example, the first digit tells you the country of origin.  Most of the time, you can get vehicle trim information in the first 10 digits, but for some manufacturers, trim is considered an option and the information is relegated to the last 7 digits of the VIN.  " />
						<hr />
						<Post 
							title="Can You Use Less Whitespace?"
							date="2/1/2020"
							category="UI/UX Design"
							body="This is, without a doubt, the most common question/feedback I've revied from users of applications I've built.  "
						/>
						<hr />
						<Post 
							title="Designing Visualizations with Quick Analysis in mind"
							date="2/1/2020"
							category="Data Visualization"
							body="One of my first projects"
						/>
						<hr />
						<Post 
							title="Subject Matter Expertise over Everything "
							date="2/1/2020"
							category="Data Analysis"
							body="The uselessness of blind statistics and the importance of subject expert validation"
						/>
					</div>
					<div className="PostFilters">
						<p><em>Sort by: </em><b>Date</b></p>
					</div>
				</div>
			</PageStyle>
		);
	}
}

export default Blog;