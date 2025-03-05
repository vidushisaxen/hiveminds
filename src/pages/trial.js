import { getAllPosts, getPostById } from "@/lib/post";
import React, { useEffect, useState } from "react";
 

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const allPosts = await getAllPosts();
      setPosts(allPosts);

      const singlePost = await getPostById("cG9zdDox"); 
      setPost(singlePost);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {post && (
        <>
          <h2>Single Post</h2>
          <p>{post.title}</p>
        </>
      )}
    </div>
  );
};

export default PostsComponent;
