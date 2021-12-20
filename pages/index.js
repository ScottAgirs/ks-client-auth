import { useQuery } from '@apollo/client'

import App from '../components/App'
import CreatePost from '../components/CreatePost';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import { useUserSession } from '../components/UserSession';

import POSTS_Q from '../graphql/query'

const IndexPage = () => {
  const { data, loading } = useQuery(POSTS_Q);
  const session = useUserSession();

  return(
    <App>
      {!loading && (
        <div>
          <h2>Posts</h2>
          <ul>
            {data.posts.map(p => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        </div>
      )}

      <SignUp />
      <LogIn />

      <CreatePost />

      <h3>Current Session Data</h3>
      
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </App>
)}

export default IndexPage
