import React from 'react';
import { shallow } from 'enzyme';

import Landing from '../index.bundle.js'

describe('<Landing />', () => {
  it('renders the correctly ', () => {
    const renderedComponent = shallow(<Landing />);
    expect(renderedComponent.find('div').length).toEqual(1);
    expect(renderedComponent.find('h1').length).toEqual(1);
  });
});