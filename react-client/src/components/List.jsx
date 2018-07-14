import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Joke Counter </h4>
    There are { props.jokes.length } jokes.
    { props.jokes.map((joke) => {
      return (<li>{joke.joke}</li>)
      })}
  </div>
)

export default List;