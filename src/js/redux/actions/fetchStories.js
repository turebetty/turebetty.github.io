import HNFetch from '../../utils/HNFetch';
import * as types from '../../constants/ActionTypes';
import * as api from '../../constants/ApiServer';

function requestTopStories() {
  return {
    type: types.REQUEST_TOP_STORIES,
    receivedAt: Date.now()
  };
}

function receiveTopStories(json) {
  return {
    type: types.RECEIVE_TOP_STORIES,
    data: json,
    receivedAt: Date.now()
  };
}

function fetchTopStoriesData(params_) {
  return dispatch => {
    dispatch(requestTopStories());
    return HNFetch({
      type: 'GET',
      url: api.topStoriesUri,
    }).then(json =>{console.log(json);dispatch(receiveTopStories(json))});
  };
}
export function fetchTopStories(params_) {
  return (dispatch) => dispatch(fetchTopStoriesData(params_));
}