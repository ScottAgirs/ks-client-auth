import gql from 'graphql-tag';

export const LOG_IN_M = gql`
  mutation LogIn($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

export const LOG_OUT_M = gql`
  mutation LogOut {
    endSession
  }
`;

export const SIGN_UP_M = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $name: String!
  ) {
    createUser(
      data: {
        email: $email
        password: $password
        name: $name
      }
    ) {
      id
      name
      email
    }
  }
`;
