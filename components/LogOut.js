import { LOG_OUT_M } from "../graphql/AUTH_MTS";
import { CURRENT_USER_Q } from "../graphql/CURRENT_USER_Q";

import { initializeApollo } from "../lib/apolloClient";

const userLogout = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.mutate({ 
    mutation: LOG_OUT_M,
    refetchQueries: [{ query: CURRENT_USER_Q }],
  }).catch(err => {
    console.error(err);
  });

  if (!process.browser) {
    return;
  }
  // unsetToken();
};


const LogOut = () => {
  return ( <button style={{background:"orange"}} type="button" onClick={userLogout}>Log out</button> );
}
 
export default LogOut;