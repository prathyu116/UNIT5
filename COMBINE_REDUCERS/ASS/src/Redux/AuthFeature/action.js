 export const GET_TOKEN = "GET_TOKEN";
 export const LOGOUT = "LOGOUT";

export const getToken = (token) => {
  return {
    type: GET_TOKEN,
    payload: token,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
    payload: [],
  };
};
