import React from 'react';
import YTsearch from 'youtube-api-search';
import Listvideo from './list_videos';
import VideoDetails from './video_details';
import Search from './search'

var API_KEY='AIzaSyCO3fB1A1UyTNGo67e6iT29PLmgFP8v2ck';

class Youtube extends React.Component{
  constructor(){
    super();
    this.state={
      videos:[],
      slectedvideo:null
    }
  }
  
  componentDidMount(){
    this.search('cricket')
  }

  search = (searchterm)=>{
    YTsearch({'key':API_KEY,term:searchterm},(videos)=>{
      console.log(videos);
      this.setState({videos:videos,slectedvideo:videos[0]})
      console.log(this.state.videos);
    })
  }
  
  render(){
    return(
      <div className="App">
        <h1>YouTube clone Application</h1>
        <Search searchterm={this.search}/>
        <Listvideo onselectedvideo={slectedvideo=>this.setState({slectedvideo:slectedvideo})}
        video={this.state.videos}/>
        <VideoDetails video={this.state.slectedvideo}/>
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

export default Youtube;
