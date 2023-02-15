import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components';
import { useGetSearchSongsQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { searchTerm } = useParams()
  const { isPlaying, activeSong } = useSelector(state => state.player)
  const { data, isFetching, error } = useGetSearchSongsQuery({searchTerm})
  const songs = data?.tracks?.hits?.map(song => song.track)

  if ( isFetching ) return <Loader title='Loading songs around you'/>
  if ( error ) return <Error/>

  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-white text-3xl text-left mb-10">Results of <span className='text-gray-400'>{searchTerm}</span></h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {songs?.map((song,i) =>(
        <SongCard 
            key={song.key}
            song={song}
            i={i}
            activeSong ={activeSong}
            isPlaying ={isPlaying}
            data={data}
        />
        ))}
      </div>
  </div>
  )
}

export default Search