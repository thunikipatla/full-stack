import React from 'react';
import VideoListItem from './list_video_item';

class Listvideo extends React.Component{

    renderList(){
        var videolist = this.props.video.map((video)=>{
        return(
        <VideoListItem key={video.etag} onselectedvideo={this.props.onselectedvideo} video={video}></VideoListItem>
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

export default Listvideo;