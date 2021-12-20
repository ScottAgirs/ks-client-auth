import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import POSTS_Q from '../graphql/query';
import useForm from '../hooks/useForm';

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION(
    $title: String!
  ) {
    createPost(
      data: {
        title: $title
      }
    ) {
      id
      title
    }
  }
`;

export default function CreatePost() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    title: '',
  });

  const [createPost, { loading }] = useMutation(
    CREATE_POST_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: POSTS_Q }],
    }
  );

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await createPost();
        console.log('onSubmit={ :: res', res);
        clearForm();
      }}
    >

      <fieldset disabled={loading} aria-busy={loading}>
        
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={inputs.title}
            onChange={handleChange}
          />
        </label>
       

        <button type="submit">+ Add Post</button>
      </fieldset>
    </form>
  );
}

export { CREATE_POST_MUTATION };