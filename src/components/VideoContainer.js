import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API_URL } from './utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    useEffect(()=>{
        getVideos();
    },[])

    const [videos,setVideos] = useState();

    const getVideos = async() => {
        const data = await fetch(YOUTUBE_VIDEO_API_URL);
        const json = await data.json();
        console.log(json)
        setVideos(json.items)
    }
  return (
    <div className='flex flex-wrap '>
        {videos?.map(video => <Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video}/></Link>
        )}
       
    </div>
  )
}

export default VideoContainer