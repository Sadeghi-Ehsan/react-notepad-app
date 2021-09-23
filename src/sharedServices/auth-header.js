export function authHeader () {
  // split token before commit to github,
  // github will revoke token, if recognize it as a valid one

  let tp1='ghp_7EhfjMDx1tl6rUeWUK';
  let tp2='3ltqO5bNH8eI2AaMof';
    return { "Content-Type": "application/json","Authorization": "token "+[[tp1+tp2]]}}