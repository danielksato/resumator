import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import Page from './page';

export default class Display extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      resume: null,
    };
  }

  componentDidMount() {
    fetch('./resume.json')
      .then(res => res.json())
      .then(resume => this.setState({ resume }));
  }

  onPageChange(n) {
    this.setState({ currentPage: n });
  }

  get navHeadings() {
    const { resume } = this.state;
    return resume ? resume.pages.map(page => page.name) : [];
  }

  get currentPage() {
    const { currentPage, resume } = this.state;
    return resume.pages[currentPage];
  }

  renderNav() {
    const { navHeadings, state } = this;
    const { currentPage } = state;

    return (
      <Navigation {...{ currentPage, navHeadings, onPageChange: n => this.onPageChange(n) }} />
    );
  }

  renderCurrentPage() {
    const { currentPage, resume } = this.state;
    return resume ? <Page {...resume.pages[currentPage]} /> : null;
  }

  render() {
    return (
      <div>
        {this.renderNav()}
        {this.renderCurrentPage()}
        <Link to="/edit">
          <p>Edit</p>
        </Link>
      </div>
    );
  }
}
