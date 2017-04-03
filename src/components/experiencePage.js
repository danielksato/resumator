import React, {Component} from 'react';
import processExperience from '../lib/processExperience.js';

const renderBullets = (bullets) => {
  return bullets ? <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null;
}

const renderExperiences = (experiences) => {
  const renderRoles = (roles) => {
    return roles ? <div className="role-container">{renderExperiences(roles)}</div> : null;
  }

  return experiences ? experiences.map((experience, index) => {
    const {description, name, bullets, roles} = processExperience(experience);
    const style = bullets || roles ? null : {marginBottom: '20px'};

    return (
      <div key={`experience-${experience.name}`} {...{style}} >
        <h4>{name}</h4>
        <h4>{description}</h4>
        {renderBullets(bullets)}
        {renderRoles(roles)}
      </div>
    );
  }) : null;
}



export default class ExperiencePage extends Component {
  render () {
    return <div>{renderExperiences(this.props.list)}</div>;
  }
}
