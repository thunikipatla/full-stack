import React from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDisplay from './components/VideoDisplay';

var API_KEY='AIzaSyCO3fB1A1UyTNGo67e6iT29PLmgFP8v2ck'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      videos: [],
      selectedvideo:[]
    }
  }
  componentDidMount(){
    // console.log('component did moint called');
    YTSearch({key:API_KEY, term:'cricket'},(videos)=>{
      // console.log(videos);
      this.setState({videos:videos, selectedvideo:videos[0]})
      // console.log(this.state.videos)
      
    })
  }
  render(){
    return(
      <div>
        <h1>Youtube clone Application</h1>
      {/* <h1>{this.state.videos.length}</h1> */}
      <VideoList video={this.state.videos}/>
     <VideoDisplay selectvideo={this.state.selectedvideo}/>
      </div>
      
    
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>YouTube clone Application</h1>
//     </div>
//   );
// }

export default App;
