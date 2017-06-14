import React from 'react';

const GitRepos = ({repos, errors}) => {
    return (
       <div className="card text-left">
            <div className="list-group">
                <a href="#" className="list-group-item active">
                    Public Repositories: {repos.length}
                </a>
                <div>
                    {errors.repos && <div className="text-danger">No public repos are found.</div>}
                </div>

                {repos.map(repo =>
                    <a href="#" key={repo.id} className="list-group-item">{repo.full_name}</a>
                )}

            </div>
       </div>
    );
};

export default GitRepos;
