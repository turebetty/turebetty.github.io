import * as types from '../../constants/ActionTypes';
const initialState = {
  topStoryList: [],
  topStoryItems: [],
  showResult: false,
};
export default function StoriesData(state = initialState, action) {
  switch (action.type) {
  case types.RECEIVE_TOP_STORIES:{
    return Object.assign({}, state, {
      topStoryList: action.data
    });
  }
  default:
    return state;
  }
}