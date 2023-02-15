import React from "react";
import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ track }) =>{
  const navigate = useNavigate()
  
  return(
    <div 
      className="flex flex-col w-[250px] rounded-lg p-4 bg-white/5 bg-opacity-75 animate-slideup backdrop-blur-sm cursor-pointer" 
      onClick = { () => navigate(`/artists/${track.artists[0].adamid}`) }
    >
      <img src={track?.images?.coverart} alt='artist_cover'/>
      <p className="text-sm truncate text-white">
        {track.subtitle}
      </p>
    </div>
  )
}
export default ArtistCard
