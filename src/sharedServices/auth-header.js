export function authHeader () {
  let auth = JSON.parse(localStorage.getItem("auth"));
  let tp1='ghp_7EhfjMDx1tl6rUeWUK'
  let tp2='3ltqO5bNH8eI2AaMof'
  // if (auth && auth.value && auth.value.accessToken) {
    return { "Content-Type": "application/json",
      "Authorization": "token "+[[tp1+tp2]]};
  // } else {
  //   return {};
  // }
}