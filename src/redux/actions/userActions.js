import axios from 'axios';

export const setUser = (payload) => ({ type: 'SET_USER', payload });

export const registerUser = (body) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    const { apiUrl } = getState();

    axios
      .post(`${apiUrl}/auth/register/author/`, body)
      .then(({ data }) => {
        dispatch(setUser(data.data));
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
