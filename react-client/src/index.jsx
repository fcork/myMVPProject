import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      jokes: []
    }
    this.getJoke = this.getJoke.bind(this)
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/jokes/random', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
    axios.get('/jokes/')
    .then((data) => {
      console.log('got to client', data.data.value[0].joke)
      this.setState({jokes: data.data.value})
    })
  }

  getJoke(){
    return <p>{this.state.jokes}</p>
  }

  render () {
    return (<div>
      <h1>Chuck Norris Random Joke Generator</h1>
      <List jokes={this.state.jokes}/>
      <button onClick={this.getJoke}>I'm Ready To Laugh</button>
      <button>I'm Not Ready To Laugh</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));