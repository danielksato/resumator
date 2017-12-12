import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { loadResumeData } from '../../actions/';
import rootReducer from '../../reducers/RootReducer';
import Navigation from '../navigation';
import PageEditor from './PageEditor';

const store = createStore(rootReducer, applyMiddleware(thunk));

export class EditorContainer extends React.Component {
  constructor() {
    super();
    this.state = { currentPage: 0 };
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.props.loadResumeData();
  }

  get navHeadings() {
    const { resumeData } = this.props;
    return resumeData ? resumeData.pages.map(page => page.name) : [];
  }

  getCurrentPageData() {
    const { currentPage } = this.state;
    const { resumeData } = this.props;
    return resumeData.pages[currentPage];
  }

  onPageChange(n) {
    this.setState({ currentPage: n });
  }

  renderNavContainer() {
    return (
      <div>
        {this.renderNav()}
        {this.renderCurrentPageEditor()}
      </div>
    );
  }

  renderNav() {
    const { navHeadings, currentPage, onPageChange } = this;
    return <Navigation {...{ currentPage, navHeadings, onPageChange }} />;
  }

  renderCurrentPageEditor() {
    const { state: { currentPage } } = this;
    return <PageEditor {...{ page: this.getCurrentPageData(), pageNumber: currentPage }} />;
  }

  render() {
    return this.props.resumeData ? this.renderNavContainer() : <div />;
  }
}

const Editor = connect(
  (state = {}) => state,
  dispatch => ({ loadResumeData: () => dispatch(loadResumeData()) }),
)(EditorContainer);

export default class ConnectedEditor extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Editor />
      </Provider>
    );
  }
}
