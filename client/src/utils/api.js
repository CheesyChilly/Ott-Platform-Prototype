import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQ2OWFkNWJjZGZhNWVlNDNhNmQwMzRkZTVkZDk1OCIsInN1YiI6IjY2MDZjMjc0YTZkZGNiMDE3YzQ1NjY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jowah75c-lMBXdlDYqDvVllKADpFZgAezZXZj4ajsY0";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
