import React from 'react';

class VideoList extends React.Component{

 renderList(){
        var videolist = this.props.video.map( (video) =>{
        return (
            <li key={video.etag}>
            <h5>{video.snippet.title}</h5>
            <img src={video.snippet.thumbnails.medium.url}></img>
        </li>
        )
        
        })
        return videolist;
    }
    
    render(){
        return(
            <div>
               <ul>
               {this.renderList()}
               </ul>

            </div>
        )
    }
}

export default VideoList;