import React from "react";
import { useSelector } from "react-redux";
import { DetailsHeader, RelatedSongs } from "../components";
import { useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id } = useParams()
  const { data: artistData } = useGetArtistDetailsQuery({id})
  const { isPlaying, activeSong } = useSelector(state => state.player)


  return(
    <div className="flex flex-col">
      <DetailsHeader artistData={artistData} artistId={id}/> 
      <RelatedSongs 
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={id}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default ArtistDetails