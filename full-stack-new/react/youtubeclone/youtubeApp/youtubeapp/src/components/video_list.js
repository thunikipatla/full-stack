import React from 'react';
import VideoListItem from './video_list_item';

class VideoList extends React.Component{

    renderList(){
        var videolist = this.props.videos.map((video)=>{
        return <VideoListItem key={video.etag} onvideoselected={this.props.onvideoselected} video={video}></VideoListItem>
        // return <li>{video.snippet.title}</li>
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