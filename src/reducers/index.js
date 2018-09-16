import { combineReducers } from 'redux';
import MapReducer from './MapReducer';

const rootReducer = combineReducers({
  maps: MapReducer
});

export default rootReducer;
