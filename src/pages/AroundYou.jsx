import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetAroundYouSongsQuery } from '../redux/services/shazamCore';

const AroundYou = () => {

  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const { isPlaying, activeSong } = useSelector(state => state.player)
  const { data, isFetching, error } = useGetAroundYouSongsQuery({country})

  useEffect(()=>{
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_nQbYXrK7IOqQ9QRlOIpPRFymei14H')
      .then(res => setCountry(res?.data?.location?.country))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  },[])

  if ( isFetching && loading ) return <Loader title='Loading songs around you'/>
  if ( error && country ) return <Error/>

  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-white text-3xl text-left mb-10">Around {country}</h2>
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

export default AroundYou