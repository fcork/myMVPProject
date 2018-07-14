import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      jokes: [],
      joke:  '',
      showImage: false
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
      console.log('got to client', data.data.value)
      this.setState({jokes: data.data.value})
    })
  }
  
  getJoke(){
    var randomIndex = Math.floor(Math.random() * 558)
    this.setState({joke: this.state.jokes[randomIndex].joke, showImage: !this.state.showImage})
  }

  // addImage(){

  //   this.setState({img: 'https://twt-thumbs.washtimes.com/media/image/2015/03/24/Chuck_Norris_Facebook_s2048x2045.jpg?af9380512ad67281ef1f71f50db400b3288ff981'})
  // }

  render () {
    return (<div>
      <h1>Chuck Norris Random Joke Generator</h1>
      <List jokes={this.state}/>
      <button onClick={this.getJoke}>I'm Ready To Laugh</button>
      <button>I'm Not Ready To Laugh</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));