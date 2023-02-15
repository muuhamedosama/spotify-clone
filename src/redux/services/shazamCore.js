import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '5bc2c121bfmsh6f573f0f200294ep106882jsnb4dd52c7f497');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
    getSongsByGenre: builder.query({ query: ({genreListId}) => `v1/charts/genre-world?genre_code=${genreListId}`}),
    getSongDetails: builder.query({ query: ({songid}) => `v1/tracks/details?track_id=${songid}` }),
    getRelatedSongs: builder.query({ query: ({songid}) => `v1/tracks/related?track_id=${songid}` }),
    getArtistDetails: builder.query({ query: ({id}) => `v2/artists/details?artist_id=${id}` }),
    getAroundYouSongs: builder.query({ query: ({country}) => `v1/charts/country?country_code=${country}` }),
    getSearchSongs: builder.query({ query: ({searchTerm}) => `v1/search/multi?query=${searchTerm}&search_type=SONGS_ARTISTS` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetAroundYouSongsQuery,
  useGetSongsByGenreQuery,
  useGetSearchSongsQuery,
} = shazamCoreApi;

