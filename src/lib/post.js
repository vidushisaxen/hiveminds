import { GET_ALL_POSTS, GET_POST_BY_ID } from "@/data/post";
import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
  uri: "https://wordpress-1416390-5311076.cloudwaysapps.com/bgguykfgyivlj", 
  cache: new InMemoryCache(),
});

// Function to fetch all posts
export const getAllPosts = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_POSTS,
    });

    return data?.posts?.edges.map((edge) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
};

// Function to fetch a single post by ID
export const getPostById = async (id) => {
  try {
    const { data } = await client.query({
      query: GET_POST_BY_ID,
      variables: { id },
    });

    return data?.post || null;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
};
