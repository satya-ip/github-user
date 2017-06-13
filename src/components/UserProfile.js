import React from 'react';

const UserProfile = ({userProfile}) => {
    return (
       <div className="card">

                <h3 className="panel panel-heading">{userProfile.name}</h3>
                <div className="card-block text-left">
                    <p><strong>Login:</strong> {userProfile.login}</p>
                    <p><strong>URL:</strong> {userProfile.url}</p>
                    <p><strong>eMail:</strong> {userProfile.email ? userProfile.email : 'n/a'}</p>
                    <p><strong>Total Repositories:</strong> {userProfile.public_repos}</p>
                    <p><strong>Location:</strong> {userProfile.location}</p>
                    <p><strong>Followers:</strong> {userProfile.followers}</p>
                    <p><strong>Following:</strong> {userProfile.following}</p>
                </div>

            </div>
    );
};

// UserProfile.propTypes = {
//     userProfile: React.PropTypes.object.isRequired
// };

export default UserProfile;