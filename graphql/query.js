import gql from 'graphql-tag';

const POSTS_Q = gql`
  query Posts {
    posts {
      id
      title
    }
  }
`;

export default POSTS_Q;
