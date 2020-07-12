import axios from "axios";

let KEY = "AIzaSyBBxIkTmIhWHVAd2tnwrme_9HcdbBpWyxg";

export const baseParams = {
  part: "snippet",
  maxResults: 10,
  key: KEY,
};

let youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export default youtubeApi;
