// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import secretary from './secretary';
import teacher from './teacher';
import student from './student';
import subject from './subject';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, secretary, teacher, student, subject });

export default reducers;
