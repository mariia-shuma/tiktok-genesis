import { Descriptions } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = function UserProfile({ user, stats }) {
  return (
    <div>
      <Descriptions title="User Info:" layout="vertical">
        <Descriptions.Item label="Nickname">{user.nickname}</Descriptions.Item>
        <Descriptions.Item label="First registered">
          {user.createTime}
        </Descriptions.Item>
        <Descriptions.Item label="Number of followers">
          {stats.followerCount}
        </Descriptions.Item>
        <Descriptions.Item label="Friends">
          {stats.followingCount}
        </Descriptions.Item>
        <Descriptions.Item label="Favs">{stats.heartCount}</Descriptions.Item>
      </Descriptions>
      <Descriptions title="My posts:" layout="vertical" />
    </div>
  );
};

UserProfile.defaultProps = {
  user: {},
  stats: {},
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    nickname: PropTypes.string,
    createTime: PropTypes.number,
  }),
  stats: PropTypes.shape({
    followerCount: PropTypes.number,
    followingCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    heartCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

export default UserProfile;
