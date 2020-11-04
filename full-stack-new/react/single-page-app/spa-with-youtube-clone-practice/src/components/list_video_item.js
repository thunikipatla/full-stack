import React from 'react';

var VideoListItem = (props)=>{
    return(
        <li onClick={()=>{
            props.onselectedvideo(props.video)
        }}>
            <h3>{props.video.snippet.title}</h3>
            <img src={props.video.snippet.thumbnails.medium.url}></img>
        </li>
    )
}

export default VideoListItem;