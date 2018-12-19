
export const UPDATE_APP_NAME = 'nav.updateAppName';
export const SET_LINKS = 'nav.setLinks';
export const SET_LINKS_RIGHT = 'nav.setLinksRight';

export const updateAppName = (appName = '') => ({
  payload: appName,
  type: UPDATE_APP_NAME
});

export const setLinks = (links = []) => ({
  payload: links,
  type: SET_LINKS
});

export const setLinksRight = (linksRight = []) => ({
    payload: linksRight,
    type: SET_LINKS_RIGHT
});
