import React, { Component } from 'react';
import axios from 'axios';
import PageStyle from "../../../hoc/PageStyle";
import "./ProjectDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class ProjectDetails extends Component {
    state = {
        data: null,
        error: false
    }

    componentDidMount = async () => {
        try {
            console.log("gathering data");
            console.log(window.location.pathname);
            console.log(window.location.pathname.split("/")[2]);
            let project_name = window.location.pathname.split("/")[2];
            let response = await axios.get(`/proxy/projects/${project_name}`);
            // console.log(response.data);
            console.log(response);
            if (response.status == 200) {
                console.log("it's ok");
                this.setState({
                    data: response.data,
                    error: false
                })
            } else {
                this.setState({error: true});
            }
        } catch (err) {
            this.setState({error: true});
        }
    }

    render() {
        let content = "";
        if (this.state.error) {
            content = (
                <div>
                    <h1>Server couldn't locate that project :(</h1>
                </div> 
            )
        } else if (this.state.data) {
            console.log("data");
            console.log(this.state.data);
            content = (
                <div className="ProjectDetails">
                    <div className="MainContent">
                        <h2 style={{fontSize: 32, color: "#334E68"}}>{this.state.data["title"]}</h2>
                        <hr />
                        <p className="Details">
                            <DemoVideo url={this.state.data.demo_video} />
                            <div dangerouslySetInnerHTML={{__html: this.state.data.details}} />
                        </p>
                    </div>
                    <div className="MetaContent">
                        {
                            !this.state.data.link ? "" :
                                <div>
                                    <h3 className="MetadataTitle">Homepage</h3>
                                    <hr />
                                    <p className="MetadataContent link">
                                        <a href={this.state.data.link}>
                                            <FontAwesomeIcon icon={faLink} />
                                            <span style={{paddingLeft: 12}}>{this.state.data.link}</span>
                                        </a>
                                    </p>
                                </div>
                        }
                        {
                            !this.state.data.github ? "" :
                                <div>
                                    <h3 className="MetadataTitle">Repository</h3>
                                    <hr />
                                    <p className="MetadataContent link">
                                        <a href={this.state.data.github}>
                                            <FontAwesomeIcon icon={faGithub} />
                                            <span style={{paddingLeft: 12}}>{this.state.data.github}</span>
                                        </a>
                                    </p>
                                </div>
                        }
                        {
                            !this.state.data.technologies || this.state.data.technologies.length == 0 ? "" :
                                <div>
                                    <h3 className="MetadataTitle">Techologies</h3>
                                    <hr />
                                    <p className="MetadataContent">
                                        {
                                            this.state.data.technologies.map(tech => {
                                                console.log(tech);
                                                return <TechDetails technology={tech} />
                                            })
                                        }
                                    </p>
                                </div>
                        }
                    </div>
                </div>
            )
        }
        
        return (
            <PageStyle>
                {content}
            </PageStyle>
        );
    }
}

const DemoVideo = (props) => {
    if (!props.url) return "";

    return (
        <div className="video"
            style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            marginTop: 24,
            marginBottom: 24,
            height: 0
        }}>
            <iframe style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }} src={props.url}
            allowFullScreen />
        </div>
    )
}

const TechDetails = (props) => {
    console.log(props);
    if (!props.technology) return "";

    const label = Object.keys(props.technology)[0]
    return (
        <div style={{overflow: 'hidden'}}>
            <div style={{float: "left"}}>
                <i>{label}</i>
            </div>
            <div style={{float: "right"}}>
                {
                    props.technology[label].join(", ")
                }
            </div>
        </div>
    )
}

export default ProjectDetails;