import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectList } from './selectors';
import Item from '../Item';

export const ListComponent = ({ list }) => (
  <ul>
    {list.map(item => <Item key={item.id} item={item} />)}
  </ul>
);

export const mapStateToProps = createStructuredSelector({
  list: selectList()
});

export default connect(mapStateToProps)(ListComponent);