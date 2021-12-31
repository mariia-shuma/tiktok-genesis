import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import {
  EllipsisOutlined,
  LikeOutlined,
  CommentOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const Post = function Post({ post }) {
  const postHashtags = post.hashtags.map((h) => (
    <span key={h.id}> #{h.name}</span>
  ));
  return (
    <Card
      key={post.id}
      hoverable
      style={{ width: 320 }}
      cover={
        <div>
          <p>{post.text}</p>
          <video width="320" height="240" controls muted autoPlay="autoplay">
            <source src={post.videoUrl} />
          </video>
        </div>
      }
      actions={[
        <div>
          <LikeOutlined /> {post.diggCount}
        </div>,
        <div>
          <CommentOutlined /> {post.commentCount}
        </div>,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <NavLink to={`/userProfile/${post.authorMeta.name}`}>
        <Meta
          avatar={<Avatar src={post.authorMeta.avatar} />}
          title={post.authorMeta.nickName}
        />
      </NavLink>
      <div>{postHashtags}</div>
    </Card>
  );
};

Post.defaultProps = {
  post: {},
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    hashtags: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
    ),
    videoUrl: PropTypes.string,
    text: PropTypes.string,
    diggCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    commentCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    authorMeta: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      nickName: PropTypes.string,
    }),
  }),
};
export default Post;
