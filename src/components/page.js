import React, { Component } from 'react';
import SkillPage from './skillPage.js';
import AboutPage from './aboutPage.js';
import ExperiencePage from './experiencePage.js';

export default class Page extends Component {
  get PageComponent() {
    switch (this.props.type) {
      case 'skill':
        return SkillPage;
      case 'about':
        return AboutPage;
      default:
        return ExperiencePage;
    }
  }

  renderTitle() {
    return <h2>{this.props.name}</h2>;
  }

  render() {
    const { PageComponent } = this;

    return (
      <div>
        {this.renderTitle()}
        <PageComponent {...this.props} />
      </div>
    );
  }
}
