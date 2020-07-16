import React, { Component } from 'react';
import axios from 'axios';

class ProjectDetails extends Component {
    state = {
        data: null,
        error: false
    }

    componentDidMount = async () => {
        try {
            let project_id = window.location.pathname.split()[1];
            let response = await axios.get(`/projectDetails/${project_id}`);
            if (response.ok) {
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
        if (this.state.error) {
            return (
                <div>
                    <h1>Server couldn't locate that project :(</h1>
                </div> 
            )
        } else {
            return (
                <div>
                    <h3>everything's ok</h3>
                </div>
            );
        }
        
    }
}

export default ProjectDetails;