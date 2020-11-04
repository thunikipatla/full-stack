import React from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import Search from './components/search';
var API_KEY='AIzaSyCO3fB1A1UyTNGo67e6iT29PLmgFP8v2ck'

class App extends React.Component{

  constructor(){
    super();
    this.state={
      videos:[],
      selectedvideo:null
    }
  }

  componentDidMount(){
    console.log('component did mount called');
    this.searchfunction('cricket');
  }

 searchfunction = (searchitem)=>{
    YTSearch({'key':API_KEY,term:searchitem},(videos)=>{
      // console.log(videos);
      this.setState({videos:videos, selectedvideo:videos[0]});
      console.log(this.state.videos);
    })
  }


  render(){
    return(
      <div className="App">
          <h1> Youtube app</h1>
          <Search onsearchTerm={this.searchfunction}/>
          <VideoList onvideoselected = {selecteddvideo =>this.setState({selectedvideo:selecteddvideo})}
          videos={this.state.videos}/>
          <VideoDetails selectedvideo={this.state.selectedvideo}/>
      </div>
    )
  }
}



// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

export default App;
