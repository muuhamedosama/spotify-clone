import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {

  const dispatch = useDispatch()
  const { activeSong, isPlaying, genreListId } = useSelector(state => state.player)

  const { data, isFetching, error} = useGetSongsByGenreQuery({genreListId})
  if(isFetching) return <Loader title ='Loading songs...'/>
  if(error && genreListId) return <Error/>
  const genreName = genres.find(genre => genre.value === genreListId).title
 

  return(
    <div className="flex flex-col ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mb-10 mt-4">
        <h2 className="font-bold text-white text-3xl text-left">Discover {genreName} </h2>
        <select
          onChange={(e)=>{dispatch(selectGenreListId(e.target.value))}}
          value={genreListId || 'POP'}
          className="bg-black text-gray-300 rounded-lg outline-none p-2 text-sm sm:mt-0 mt-3"
        >
          {genres.map(genre => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
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

export default Discover
