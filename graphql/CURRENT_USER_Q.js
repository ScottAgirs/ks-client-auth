import { gql, useQuery } from '@apollo/client';

export const CURRENT_USER_Q = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;