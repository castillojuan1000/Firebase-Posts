import React, { useContext } from 'react'
import Post from './Post';
import AddPost from './AddPost';
import { PostsContext } from '../providers/PostsProvider';

const Posts = () => {
  //? we are grabbing an array of post from Context
  const posts = useContext(PostsContext)
  return (
    <section className="Posts">
      <AddPost />
      {posts.map(post => <Post {...post} key={post.id} />)}

    </section>
  )
}

export default Posts;


