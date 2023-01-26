//리덕스 통합관리

import { combineReducers } from 'redux';
import mbti from './modules/mbti';
import todo from './modules/todo';
export default combineReducers({
  todo,
  mbti,
});
