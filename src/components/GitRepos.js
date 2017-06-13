import React from 'react';

const GitRepos = ({repos}) => {
    return (
       <div className="card">
            {repos.map(repo =>
                    <p key={repo.id}>{repo.full_name} </p>
                )}
       </div>
    );
};

// GitRepos.propTypes = {
//     repos: React.PropTypes.array.isRequired,
// };

export default GitRepos;