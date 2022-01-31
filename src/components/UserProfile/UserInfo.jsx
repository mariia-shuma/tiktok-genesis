import React from 'react';
import { useParams } from 'react-router-dom';

import { Spin } from 'antd';

import UserProfile from './UserProfile';
import Post from '../Feed/Post/Post';
import ErrorMessage from '../ErrorMessage';
import getUserInfo from '../../services/getUserInfo';
import fetchTrendingFeed from '../../api/fetchTrendingFeed';

const UserInfo = function UserInfo() {
  const { name } = useParams();
  const [user, setUser] = React.useState(null);
  const [stats, setStats] = React.useState(null);
  const [feed, setFeed] = React.useState(null);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(async () => {
    try {
      const response = await getUserInfo(name);
      setUser(response.user);
      setStats(response.stats);
      setFeed(null);
    } catch (error) {
      setIsError(true);
    }
  }, [name]);

  React.useEffect(async () => {
    try {
      const response = await fetchTrendingFeed(name);
      setFeed(response);
    } catch (error) {
      setIsError(true);
    }
  }, [name]);

  return (
    <div>
      {isError ? (
        <ErrorMessage />
      ) : (
        <div>
          {user && stats ? <UserProfile user={user} stats={stats} /> : <Spin />}
          {feed ? feed.map((p) => <Post post={p} key={p.id} />) : <Spin />}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
