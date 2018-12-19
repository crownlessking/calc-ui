import {
  SET_LINKS,
  SET_LINKS_RIGHT,
  UPDATE_APP_NAME,
} from '../../actions/nav-actions';

export default function(state:any = {}, {type, payload}:any) {

  switch (type) {
    case SET_LINKS:
      return { ...state, links: payload };
    case SET_LINKS_RIGHT:
      return { ...state, linksRight: payload };
    case UPDATE_APP_NAME:
      return { ...state, appName: payload };
    default:
      return state;
  }

}
