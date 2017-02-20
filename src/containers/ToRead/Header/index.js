import React from 'react';
import { connect } from 'react-redux';
import { changeSearchTxt } from '../actions';
import './style.css';

export const HeaderComponent = ({ handleChange, searchTxt }) => {
  return (
    <div className="trhead">
      <input type="text" onChange={handleChange} value={searchTxt}/>
    </div>
  );
};

export const mapStateToProps = state => ({
  searchTxt: state.getIn(['toRead', 'searchTxt']),
});

export const mapDispatchToProps = dispatch => ({
  handleChange: (ev) => dispatch(changeSearchTxt(ev.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);