import React from 'react';
import Post from './Post/Post';
import { getTrendingFeed } from '../../services/ApiRequests';
import Errormessage from '../ErrorMessage';

const Feed = function Feed() {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    getTrendingFeed()
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const postsElements = posts.map((p) => <Post post={p} key={p.id} />);
  return <div>{error ? <Errormessage /> : postsElements}</div>;
};

export default Feed;
