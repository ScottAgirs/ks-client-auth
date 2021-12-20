import { useQuery } from '@apollo/client';

import { CURRENT_USER_Q } from '../graphql/CURRENT_USER_Q';

export function useUserSession() {
  const { data } = useQuery(CURRENT_USER_Q);
  return data?.authenticatedItem;
}