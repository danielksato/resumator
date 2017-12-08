import React, { Component, PropTypes as PT } from 'react';

export default class AboutPage extends Component {
  renderPhoto() {
    return this.props.image ? (
      <div className="headshot-container">
        <img className="headshot" src={this.props.image} />
      </div>
    ) : null;
  }

  renderParagraphs() {
    return <div>{this.props.about.map((text, index) => <p key={`about-${index}`}>{text}</p>)}</div>;
  }

  render() {
    return (
      <div>
        {this.renderPhoto()}
        {this.renderParagraphs()}
      </div>
    );
  }
}

AboutPage.propTypes = {
  image: PT.string.isRequired(),
  about: PT.arrayOf(PT.string).isRequired(),
};

AboutPage.defaultProps = {
  image: '',
  about: [''],
};
