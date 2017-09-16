import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as fetchStoriesActions from '../redux/actions/fetchStories';

class Stories extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    alert('000');
    const {fetchTopStories} = this.props;
    fetchTopStories();
  }
  componentDidUpdate(){
    const {StoriesData} = this.props;
  }
  render() {
    const{ StoriesData } = this.props;
    return (
      <div className="pg-stories">
      </div>
    );
  }
}
Stories.propTypes  = {
  StoriesData: PropTypes.object.isRequired,
  fetchTopStories: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    StoriesData: state.StoriesData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, fetchStoriesActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);