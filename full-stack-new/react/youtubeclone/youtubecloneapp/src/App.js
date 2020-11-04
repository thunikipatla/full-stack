import React from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';

const API_KEY='AIzaSyCO3fB1A1UyTNGo67e6iT29PLmgFP8v2ck'
// YTSearch({key: API_KEY, term: 'cricket'}, function(videos){
//   console.log(videos)
// });

class App extends React.Component{

  constructor(){
    super();
    this.state={
      videos: []
    }

  }
  componentDidMount(){
    console.log('ComponentDid Mount called');

    YTSearch({key:API_KEY, term:'cricket'}, (videos)=> {
      // console.log(videos);
      this.setState({videos:videos})
      console.log(this.state.videos);
      
    })
  }
  

  render(){
    return(
      <div>
        <h1>Youtube clone app</h1>
    {/* <h1>{this.state.videos.length}</h1> */}
    <VideoList video={this.state.videos}/>
      </div>
      
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Youtube clone app</h1>
      
//     </div>
//   );
// }

export default App;
