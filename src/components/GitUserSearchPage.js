import React from 'react';
import UserSearchWidget from './UserSearchWidget';
import UserProfile from './UserProfile';
import GitRepos from './GitRepos';
import axios from 'axios';

export default class GitUserSearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            userid: '',
            profile: {},
            repos: [],
            errors: {user: false, repos: false}
        };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.loadUserRepos = this.loadUserRepos.bind(this);
    }

    onSearchSubmit(event) {
        event.preventDefault();

        axios({url: `https://api.github.com/users/${this.state.userid}`, method: 'get'}).then((res) => {
            let state = Object.assign({}, this.state, {profile: res.data, errors: {user: false, repos: false}});

            this.setState(state);
            console.log('Data from live Git server: ', res.data)
            console.log('Entire state: ', this.state)
        }).catch((err) => {
            let error = {user: true, repos: false};
            let state = Object.assign({}, this.state, error);
            this.setState(state);
            console.log("Error is ", err);
        });

        console.log('search submit: ', this.state.userid);
    }

    onSearchChange(event) {
        let state = Object.assign({}, this.state, {userid: event.target.value, profile: {}, repos: [], errors: {}});
       
        this.setState(state);
        console.log('search input: ', event.target.value);
    }

    loadUserRepos() {
        axios({url: `https://api.github.com/users/${this.state.userid}/repos`, method: 'get'}).then((res) => {
            //this.setState({...this.state, profile : res.data});
            let error;
            if(res.data.length == 0)
                error = {user: false, repos: true};
            else
                error = {user: false, repos: false};

            let state = Object.assign({}, this.state, {repos: res.data, errors: error});

            this.setState(state);
            console.log('Data from live Git server: ', res.data)
        }).catch((err) => {
            console.log("Error is ", err);
        });

        console.log('search submit: ', this.state.userid);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <UserSearchWidget user={this.state.userid} onChange={this.onSearchChange} onSearch={this.onSearchSubmit} errors={this.state.errors}></UserSearchWidget>
                    </div>

                </div>
                <div className="row">

                    {Object.keys(this.state.profile).length > 0 &&
                        
                        <div className="container-fluid">
                            <div className="row panel panel-default">
                                <div className="col-xs-12 col-md-5 panel panel-success">
                                    <UserProfile userProfile={this.state.profile}></UserProfile>
                                </div>

                                <div className="col-xs-12 col-md-2">
                                    <button type="button" className="btn btn-info text-align-content" onClick={this.loadUserRepos}>
                                        Show Repos &nbsp;&nbsp;<span className="glyphicon glyphicon-triangle-right"></span>
                                    </button>
                                </div>

                                <div className="col-xs-12 col-md-5">
                                     {!(this.state.repos.length == 0 && !this.state.errors.repos) && 
                                    <div className="panel panel-success panel-height-scroll">
                                        <GitRepos repos={this.state.repos} errors={this.state.errors}></GitRepos>
                                    </div>
                                     }                  
                                </div>
                            </div>
                        </div>

                    }

                </div>
            </div>
        );
    }

}
