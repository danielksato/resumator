import React, {Component} from 'react';

const styles = {
  active: {
    backgroundColor: 'yellow'
  }
}

export default class Navigation extends Component {

  renderNavButtons () {
    const {currentPage, navHeadings} = this.props;
    return navHeadings.map((heading, index) => {
      return (
        <li
          className="nav-item"
          key={`navigation-${heading}`}
          onClick={() => this.props.onPageChange(index)}
          style={index === currentPage ? styles.active : null}
        >
          {heading}
        </li>
      );
    });
  }

  render () {
    return (
      <div className="nav-container">
        <ul className="nav-list">
        {this.renderNavButtons()}
        </ul>
      </div>
    );
  }
}
