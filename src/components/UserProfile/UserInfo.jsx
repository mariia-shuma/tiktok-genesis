import React from 'react';
import { useParams } from 'react-router-dom';

import { Spin } from 'antd';

import UserProfile from './UserProfile';
import { getUserFeed, getUserInfo } from '../../services/ApiRequests';
import Post from '../Feed/Post/Post';
import ErrorMessage from '../ErrorMessage';

const UserInfo = function UserInfo() {
  const { name } = useParams();
  const [user, setUser] = React.useState(null);
  const [stats, setStats] = React.useState(null);
  const [feed, setFeed] = React.useState(null);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    getUserInfo(name)
      .then((response) => {
        setUser(response.data.user);
        setStats(response.data.stats);
      })
      .catch(() => {
        setIsError(true);
      });

    getUserFeed(name)
      .then((response) => {
        setFeed(response.data);
      })
      .catch(() => {
        setIsError(true);
      });
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
