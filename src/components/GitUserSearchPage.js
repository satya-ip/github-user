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
            errors: false
        };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.loadUserRepos = this.loadUserRepos.bind(this);
    }

    onSearchSubmit(event) {

        event.preventDefault();

        axios({url: `https://api.github.com/users/${this.state.userid}`, method: 'get'}).then((res) => {
            let state = Object.assign({}, this.state, {profile: res.data});

            this.setState(state);
            console.log('Data from live Git server: ', res.data)
            console.log('Entire state: ', this.state)
        }).catch((err) => {

            let state = Object.assign({}, this.state, {errors: true});
            this.setState(state);

            console.log("Error is ", err);
        });

        console.log('search submit: ', this.state.userid);
    }

    onSearchChange(event) {

        if (!event.target.value) {
            let state = Object.assign({}, this.state, {errors: false});
            this.setState(state);

        }
        console.log('search input: ', event.target.value);
        this.setState({userid: event.target.value, profile: {}, repos: []});
    }

    loadUserRepos() {
        axios({url: `https://api.github.com/users/${this.state.userid}/repos`, method: 'get'}).then((res) => {
            //this.setState({...this.state, profile : res.data});
            let state = Object.assign({}, this.state, {repos: res.data});

            this.setState(state);

            console.log('Data from live Git server: ', res.data)
            console.log('Entire state: ', this.state)
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

                        <div className="col-xs-12 col-md-6">
                        <UserProfile userProfile={this.state.profile}></UserProfile>
                        <div className="col-xs-12 col-md-6">
                            <a href="#" onClick={this.loadUserRepos}>
                                Plus
                            </a>
                        </div>

                    </div>}

                    <div className="col-xs-12 col-md-6">

                        { this.state.repos.length > 0 &&
                            <GitRepos repos={this.state.repos}></GitRepos>
                        }

                    </div>

                </div>
            </div>
        );
    }

}

// GitUserSearchPage.propTypes = {
//     userid: PropTypes.string,
//     repos: PropTypes.array,
//     profile: PropTypes.object
// };
