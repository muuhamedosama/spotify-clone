import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { PlayPause } from '../components'

const SongCard = ({ song, i, activeSong, data, isPlaying }) =>{
  const dispatch = useDispatch()

  const handlePause = () => {
    dispatch(playPause(false))
  }
  const handlePlay = () => {
    dispatch(playPause(true))
    dispatch(setActiveSong({song, data, i}))
  }
  

  return(
    <div className="flex flex-col w-[250px] rounded-lg p-4 bg-white/5 bg-opacity-75 animate-slideup backdrop-blur-sm cursor-pointer">
      <div className="h-56 w-full relative group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 w-full h-full group-hover:flex rounded-lg ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70':'hidden'}`}>
          <PlayPause
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePause={handlePause}
            handlePlay={handlePlay}
          />
        </div>
        <img src={song?.images?.coverart} alt='song_cover'/>
      </div>
      <div className="flex flex-col mt-2 font-semibold text-white">
        <Link to={`/songs/${song.key}`}>
          <p className="truncate text-xl">
            {song?.title}
          </p>
        </Link> 
        <Link to={song.artists? `/artists/${song.artists[0].adamid}`:'/top-artists'}>
          <p className="text-sm truncate">
            {song.subtitle}
          </p>
        </Link>
      </div>
    </div>
  )
}
export default SongCard
