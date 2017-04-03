import React, {Component} from 'react';
import Navigation from './components/navigation.js';
import Page from './components/page.js';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      currentPage: 0,
      resume: null
    }
  }

  get navHeadings () {
    const {resume} = this.state;
    return resume ? resume.pages.map((page) => page.name) : [];
  }

  get currentPage () {
    const {currentPage, resume} = this.state;
    return resume.pages[currentPage];
  }

  componentDidMount () {
    fetch('./resume.json')
      .then((res) => res.json())
      .then((resume) => this.setState({resume}))
  }

  onPageChange (n) {
    this.setState({currentPage: n});
  }

  renderNav () {
    const {navHeadings, state} = this;
    const {currentPage} = state;

    return (
      <Navigation
        {...{currentPage, navHeadings, onPageChange: (n) => this.onPageChange(n)}}
      />
    );
  }

  renderCurrentPage () {
    const {currentPage, resume} = this.state;
    return resume ? <Page {...resume.pages[currentPage]} /> : null;
  }

  render () {
    return (
      <div>
        {this.renderNav()}
        {this.renderCurrentPage()}
      </div>
    );
  }
}

export default App;
