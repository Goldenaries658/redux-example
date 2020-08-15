import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => async (dispatch) => {
  // Fetching placeholder data from dummy API
  console.log('fetching');
  const posts = await (
    await fetch('https://jsonplaceholder.typicode.com/posts')
  ).json();

  dispatch({
    type: FETCH_POSTS,
    payload: posts,
  });
};

export const addPost = () => async (dispatch) => {};
