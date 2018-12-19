
export const UPDATE_HISTORY = 'home.updateHistory';

export const updateHistory = (history = []) => ({
  history,
  type: UPDATE_HISTORY
});
