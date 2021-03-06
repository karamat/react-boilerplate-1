import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      "This is HomePage component!"
    )).toEqual(true);
  });
});
