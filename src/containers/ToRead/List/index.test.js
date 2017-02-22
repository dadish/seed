import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { ListComponent as List } from './';

const props = { list: fromJS([]) };

test('renders without crashing', () => {
  shallow(<List {...props} />);
});