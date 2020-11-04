import React from 'react';

var VideoListItem = (props)=>{
    // console.log(props);
    return(

        <li onClick={()=>{
            props.onvideoselected(props.video)
        }}>
           <h3>{props.video.snippet.title}</h3>
           <img src={props.video.snippet.thumbnails.medium.url}></img>
        </li>
    )
}

export default VideoListItem;