// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import secretary from './secretary';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, secretary });

export default reducers;
