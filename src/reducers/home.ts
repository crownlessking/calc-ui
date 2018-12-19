
import {
  UPDATE_HISTORY
} from '../actions/home';

/**
 * 
 *
 * appState = {
 *    home: {
 *      history: IHistory[]
 *    }
 * }
 */
export default function(home = {}, {type, payload}: any) {

  switch (type) {
    case UPDATE_HISTORY:
      return { ...home, history: payload };
    default:
      return home;
  }

};