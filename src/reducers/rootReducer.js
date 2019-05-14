import {combineReducers} from 'redux';
import stuff from './stuffReducer';
import clockStore from './clockReducer';

const rootReducer = combineReducers({
  stuff,
  clockStore
});

export default rootReducer;