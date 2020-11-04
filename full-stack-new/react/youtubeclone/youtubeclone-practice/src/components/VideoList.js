import React from 'react';

class VideoList extends React.Component{

    renderList(){
        var videolist = this.props.video.map( (vid)=>{    
        return(
            <li key={vid.etag}>
            <h5>{vid.snippet.title}</h5>
            <img src={vid.snippet.thumbnails.medium.url}></img>
            </li>
        ) 

        })
        return videolist;
    }
    
    render(){
        return(
            <div>
                <ul>
                <h3>{this.renderList()}</h3>
                </ul>
               
            </div>
        )
    }
}

export default VideoList;