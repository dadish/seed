import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectList } from './selectors';
import { selectFetching } from '../selectors';
import { Grid, Loader } from 'semantic-ui-react';
import Item from '../Item';
import './style.css';

export const ListComponent = ({ list, fetching }) => {
  let output;
  if (fetching) {
    output = <Loader active>Loading...</Loader>;
  } else {
    output = (
      <Grid padded>
        {list.map(item => <Item key={item.get('id')} item={item} />)}
      </Grid>
    );
  }
  return output;
}

export const mapStateToProps = createStructuredSelector({
  list: selectList(),
  fetching: selectFetching(),
});

export default connect(mapStateToProps)(ListComponent);