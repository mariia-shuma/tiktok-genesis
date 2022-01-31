import axios from 'axios';
import options from './Options';

const fetchUserInfo = async (name) => {
  const url = `https://tiktok33.p.rapidapi.com/user/info/${name}`;
  return axios.request({ ...options, url });
};

export default fetchUserInfo;
