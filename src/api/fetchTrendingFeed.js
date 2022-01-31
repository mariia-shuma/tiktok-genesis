import axios from 'axios';
import options from './Options';

const fetchTrendingFeed = () => {
  const url = 'https://tiktok33.p.rapidapi.com/trending/feed';
  return axios.request({ ...options, url });
};

export default fetchTrendingFeed;
