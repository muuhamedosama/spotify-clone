import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ activeSong , isPlaying , handlePause, handlePlay, song }) => {
  return(

      (activeSong?.title === song?.title && isPlaying) ? 
      <FaPauseCircle
        className='text-white'
        size = {35}
        onClick = {handlePause}
      /> : 
      <FaPlayCircle
        className='text-white'
        size = {35}
        onClick = {handlePlay}
      />
  )
}
  


export default PlayPause;
