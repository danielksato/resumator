import React, {Component} from 'react';

export default class SkillPage extends Component {

  renderSkills () {
    return this.props.list.map((skillset, index) => {
      const {name, list} = skillset
      return (
        <p key={`skills-${name}-${index}`}>
          <em>{`${name}: `}</em>
          <span>{list.join(', ')}</span>
        </p>
      )
    })
  }

  render () {
    return (
      <div>
        {this.renderSkills()}
      </div>
    );
  }
}
