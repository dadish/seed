import React from 'react';
import { shallow } from 'enzyme';
import { ItemComponent as Item } from './';

const props = {
  item: {
    name: 'My_best_thing_ever',
  },
};

test('renders without crashing', () => {
  shallow(<Item {...props} />);
});