import { combineReducers } from 'redux';
import postList from './postsReducer';
import usersList from './usersReducer';

export default combineReducers({ 
  postList,
  usersList
 });
