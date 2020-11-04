import React from 'react';

var VideoDetails = (props)=>{

    var obj={...props.selectedvideo};

    var x=Object.assign({},obj.id);
    console.log(x.videoId);


   var videourl=`https://www.youtube.com/embed/${x.videoId}`;
    return(
        <iframe width="560" height="315" src={videourl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}

export default VideoDetails;