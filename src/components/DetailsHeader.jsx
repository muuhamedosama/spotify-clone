import React from 'react';
import { Link } from 'react-router-dom';

export const DetailsHeader = ({ artistId, songData, artistData}) => {
  const artist =  artistData?.data[0].attributes
  return (
    <div className='flex flex-col w-full relative mb-20'>
      <div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28' />
      <div className='flex absolute top-20 left-4 items-center'>
        <img 
          alt='art'
          src={
            artistId 
              ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
              : songData?.images?.coverart
          }
          className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black'
        /> 
        <div className='ml-5 flex flex-col justify-start' >
          <p className='text-white font-bold text-2xl'>
            {!artistId? songData?.title : artist?.name}
          </p>
          {!artistId && 
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className='text-gray-400 text-sm'>{songData?.subtitle}</p>
            </Link>
          }
          <p className='text-gray-400 text-sm'>
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailsHeader;

