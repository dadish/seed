import { fromJS } from 'immutable';

const initialState = fromJS({});

const reducer = (state = initialState, action) => {
  console.log('About Reducer');
  return state;
};

export default reducer;