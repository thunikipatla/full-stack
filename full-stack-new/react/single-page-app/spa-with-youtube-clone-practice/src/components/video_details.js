import React from 'react';

var VideoDetails = (props)=>{
    // console.log(props.video);

    var obj = {...props.video}
    var x = Object.assign({}, obj.id)

    // console.log(x.videoId);

   var videosrc=`https://www.youtube.com/embed/${x.videoId}`

    return(
        <div>

<iframe width="560" height="315" src={videosrc} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )
}

export default VideoDetails;