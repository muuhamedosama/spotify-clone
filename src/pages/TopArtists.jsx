import React from 'react';
import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery()

  if ( isFetching ) return <Loader title='Loading songs around you'/>
  if ( error ) return <Error/>

  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-white text-3xl text-left mb-10">Top Artists</h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {data?.map((track) =>(
          <ArtistCard key={track.key} track={track}/>
        ))}
      </div>
  </div>
  )
}

export default TopArtists