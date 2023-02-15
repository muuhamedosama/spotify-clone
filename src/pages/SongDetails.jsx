import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailsHeader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice"
import { useParams } from "react-router-dom";
import { useGetRelatedSongsQuery, useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const { songid } = useParams()
  const { data : songData } = useGetSongDetailsQuery({songid})
  const { data } = useGetRelatedSongsQuery({songid})
  const { isPlaying, activeSong} = useSelector(state => state.player)
  const dispatch = useDispatch()


  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return(
    <div className="flex flex-col">
      <DetailsHeader songData={songData} artistId=''/>
      <div className="mb-3 mt-3">
        <h2 className="text-3xl text-white font-bold mb-5">Lyrics: </h2>
        <div>
          {
          songData?.sections[1].type === 'LYRICS' 
          ? songData?.sections[1].text.map((text, i) => <p key={i} className="text-gray-300 indent-2">{text}</p>)
          : <p className="text-white indent-2">Sorry, No lyrics found.</p>
          }
        </div>
      </div>
      <RelatedSongs 
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  )
}

export default SongDetails