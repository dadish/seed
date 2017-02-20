import React from 'react';
import { shallow } from 'enzyme';
import ToRead from './index';

test('renders without crashing', () => {
  shallow(<ToRead />);
});

