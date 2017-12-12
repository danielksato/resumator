import React from 'react';
import { connect } from 'react-redux';
import { editResumePage } from '../../actions/';

export class PageEditor extends React.Component {
  onChangeValue(e) {
    const { value } = e.target;
    this.props.editResumePage({
      pageNumber: this.props.pageNumber,
      attribute: e.target.getAttribute('data-target'),
      value,
    });
  }

  renderTitle() {
    return (
      <textarea
        value={this.props.page.name}
        onChange={e => this.onChangeValue(e)}
        data-target="name"
      />
    );
  }

  render() {
    return <div>{this.renderTitle()}</div>;
  }
}

export default connect(
  () => ({}),
  dispatch => ({ editResumePage: payload => dispatch(editResumePage(payload)) }),
)(PageEditor);
