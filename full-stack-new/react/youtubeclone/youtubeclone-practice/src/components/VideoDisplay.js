import React from 'react';

const VideoDisplay= (props) => {

    // var obj=Object.assign({},props.video);

     var obj={...props.selectvideo};

   var x=Object.assign({},obj.id);
   console.log(x.videoId);

  var videoSrc=`https://www.youtube.com/embed/${x.videoId}`

   return(
        
        <iframe width="560" height="315" src={videoSrc} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
   )

}
// export default VideoDetail;

export default VideoDisplay;

