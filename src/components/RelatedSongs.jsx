import React from 'react'
import SongBar from './SongBar'

const RelatedSongs = ({data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId}) => {
  return (
    <div className='flex flex-col mt-5'>
      <h2 className='text-white font-bold text-3xl'>Related Songs: </h2>
      <div className='flex flex-col mt-4 w-full'>
        {data?.map((song, i) => 
          <SongBar
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            i={i}
            key={`${song.key}-${artistId}-${i}`}
            artistId={artistId}
          />
        )}
      </div>
    </div>
  )
}

export default RelatedSongs