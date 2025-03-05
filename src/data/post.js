import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 100) {
      edges {
        node {
          id
          slug
          title
          modified
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(id: $id, idType: ID) {
      id
      title
    }
  }
`;
