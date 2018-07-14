import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => {
  var image = props.jokes.showImage ? <img src="https://www.fanxsaltlake.com/wp-content/uploads/2018/04/Delta-Force.png" /> : null
    
  return (
  <div>
    <h4> Joke Counter </h4>
    There are { props.jokes.jokes.length } jokes.

    <p>{props.jokes.joke}</p>
    {image}



    {/* { props.jokes.map((joke, i) => {
      
      if (i === randomIndex)
      return (<li>{joke.joke}</li>)
      })} */}
  </div>
  )
}
var randomIndex = Math.floor(Math.random() * 558)


export default List;