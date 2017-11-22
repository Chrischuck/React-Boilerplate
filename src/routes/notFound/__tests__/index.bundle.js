import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../index.bundle.js'

describe('<NotFound />', () => {
  it('renders the correctly ', () => {
    const renderedComponent = shallow(<NotFound />);
    expect(renderedComponent.find('div').length).toEqual(1);
    expect(renderedComponent.find('h1').length).toEqual(1);
  });
});