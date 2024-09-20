import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

export class Navbar extends Component {
static defaultProps = {
  title: 'Github Finder'
};

static propTypes = {
  title:PropTypes.string.isRequired
}

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
        <FontAwesomeIcon icon={faGithub} /> {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar