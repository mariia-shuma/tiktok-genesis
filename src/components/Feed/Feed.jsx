import React from 'react';

import { ErrorMessage } from 'component-library';

import Post from './Post/Post';

import getTrendingFeed from '../../services/getTrendingFeed';

const Feed = function Feed() {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(async () => {
    try {
      const response = await getTrendingFeed();
      setPosts(response);
    } catch (er) {
      setError(true);
    }
  }, []);

  const postsElements = posts.map((p) => <Post post={p} key={p.id} />);
  return <div>{error ? <ErrorMessage /> : postsElements}</div>;
};

export default Feed;
