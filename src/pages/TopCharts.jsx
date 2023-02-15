import React from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
  const { isPlaying, activeSong } = useSelector(state => state.player)
  const { data, isFetching, error } = useGetTopChartsQuery()

  if ( isFetching ) return <Loader title='Loading songs around you'/>
  if ( error ) return <Error/>

  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-white text-3xl text-left mb-10">Top Charts</h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {data?.map((song,i) =>(
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

export default TopCharts