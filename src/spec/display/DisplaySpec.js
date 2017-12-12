import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { findWithType, findAllWithType } from 'react-shallow-testutils';
import Display from 'components/Display';
import Navigation from 'components/navigation';
import Page from 'components/page';
import { Link } from 'react-router-dom';

describe('Display Component', () => {
  let shallowRenderer;

  beforeEach(() => {
    shallowRenderer = new ShallowRenderer();
  });

  function render() {
    shallowRenderer.render(<Display />);
    return {
      output: shallowRenderer.getRenderOutput(),
      instance: shallowRenderer.getMountedInstance(),
    };
  }

  it('should display the nav', () => {
    const { output } = render();
    expect(findWithType(output, Navigation)).toBeTruthy();
  });

  it('should not display a page when one is not loaded', () => {
    const { output } = render();
    expect(findAllWithType(output, Page).length).toBe(0);
  });

  it('should display a page once one is loaded', () => {
    const { instance } = render();
    instance.setState({ resume: { pages: [{}] } });
    const { output } = render();
    expect(findWithType(output, Page)).toBeTruthy();
  });

  it('should display the edit link', () => {
    const { output } = render();
    expect(findWithType(output, Link)).toBeTruthy();
  });
});
