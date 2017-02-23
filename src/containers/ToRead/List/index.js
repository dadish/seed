import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectList } from './selectors';
import Item from '../Item';
import './style.css';

export const ListComponent = ({ list }) => (
  <ul className="trd-l">
    {list.map(item => <Item key={item.id} item={item} />)}
  </ul>
);

export const mapStateToProps = createStructuredSelector({
  list: selectList()
});

export default connect(mapStateToProps)(ListComponent);