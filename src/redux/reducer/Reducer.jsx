import {
  HIDE_CHAT_SECTION,
  SET_CURRENT_USER,
  SHOW_CHAT_SECTION,
} from "../actionTypes/ActionTypes";

const initialState = {
  displayChatSection: false,
  currentUser: [],
};

function displayChatReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_CHAT_SECTION:
      return {
        state,
        displayChatSection: action.data,
      };

    case HIDE_CHAT_SECTION:
      return {
        state,
        displayChatSection: action.data,
      };

    case SET_CURRENT_USER:
      return {
        state,
        currentUser: [...state.currentUser, ...action.data],
      };
    default:
      return state;
  }
}

export default displayChatReducer;
