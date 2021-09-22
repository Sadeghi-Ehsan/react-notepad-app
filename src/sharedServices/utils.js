let Utils = {
  updateQueryString (searchModel) {
    return Object.keys(searchModel)
      .filter(key => searchModel[key] != null)
      .map(key => `${key}=${encodeURIComponent(searchModel[key])}`).join('&');
  }
};
export default Utils;