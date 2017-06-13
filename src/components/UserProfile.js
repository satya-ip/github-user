import React from 'react';

const UserProfile = ({userProfile}) => {
    return (
       <div className="card">
                <h3 className="card-header">{userProfile.name}</h3>
                <div className="card-block">
                    <p>Login: {userProfile.login}</p>
                    <p>URL: {userProfile.url}</p>
                    <p>eMail: {userProfile.email ? userProfile.email : 'n/a'}</p>
                    <p>Repositories: {userProfile.public_repos}</p>
                    <p>Location: {userProfile.location}</p>
                    <p>Followers: {userProfile.followers}</p>
                    <p>Following: {userProfile.following}</p>
                </div>

            </div>
    );
};

// UserProfile.propTypes = {
//     userProfile: React.PropTypes.object.isRequired
// };

export default UserProfile;