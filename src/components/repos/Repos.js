import React from 'react';
import PropTypes from 'prop-types';

import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  // Add a guard to make sure repos is defined and is an array
  if (!repos || repos.length === 0) {
    return <div>No repositories found.</div>;
  }

  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
