import React from 'react';
import {connect} from 'react-redux';
import {
  loadStories,
  clear
} from '../actions';

const Stories = props => {
  const {loadStories, clear} = props;
  return (
    <div>
      <button onClick={loadStories} >Load stories</button>
      <button onClick={clear} >Clear</button>
      <StoryList {...props} />
    </div>
  );
}

const StoryList = ({items}) => {
  if (items.length === 0) return null;
  return (
    <div>
      {items.map(item => <Story {...item} key={item.id} />)}
    </div>
  );
}

const Story = ({title}) => <p>{title}</p>;

const mapState = state => state

const mapDispatch = dispatch => ({
  loadStories: () => dispatch(loadStories()),
  clear: () => dispatch(clear())
});

export default connect(mapState, mapDispatch)(Stories);