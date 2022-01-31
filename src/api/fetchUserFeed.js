import axios from 'axios';
import options from './Options';

const fetchUserFeed = (name) => {
  const url = `https://tiktok33.p.rapidapi.com/user/feed/${name}`;
  return axios.request({ ...options, url });
};

export default fetchUserFeed;
