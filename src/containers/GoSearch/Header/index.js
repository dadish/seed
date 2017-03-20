import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { selectSearchTxt, selectFetching } from '../selectors';
import { changeSearchTxt } from '../actions';

export const HeaderComponent = ({ handleChange, searchTxt, fetching }) => {
  return (
    <Input
      icon="search"
      onChange={handleChange}
      value={searchTxt}
      placeholder="search..."
      loading={fetching}
      autoFocus
      fluid
    />
  );
};

export const mapStateToProps = state => createStructuredSelector({
  searchTxt: selectSearchTxt(),
  fetching: selectFetching(),
});

export const mapDispatchToProps = dispatch => ({
  handleChange: (ev) => dispatch(changeSearchTxt(ev.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);