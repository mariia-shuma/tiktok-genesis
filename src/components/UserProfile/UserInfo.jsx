import React from 'react';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import UserProfile from './UserProfile';
import { getUserFeed, getUserInfo } from '../../services/ApiRequests';
import Post from '../Feed/Post/Post';

const UserInfo = function UserInfo() {
  const { name } = useParams();
  const [user, setUser] = React.useState(null);
  const [stats, setStats] = React.useState(null);
  const [feed, setFeed] = React.useState(null);

  React.useEffect(() => {
    getUserInfo(name).then((response) => {
      setUser(response.data.user);
      setStats(response.data.stats);
    });

    getUserFeed(name).then((response) => {
      setFeed(response.data);
    });
  }, [name]);

  return (
    <div>
      {user && stats ? <UserProfile user={user} stats={stats} /> : <Spin />}
      {feed ? feed.map((p) => <Post post={p} key={p.id} />) : <Spin />}
    </div>
  );
};

export default UserInfo;
