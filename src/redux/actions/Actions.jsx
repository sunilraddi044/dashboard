import {
  HIDE_CHAT_SECTION,
  SET_CURRENT_USER,
  SHOW_CHAT_SECTION,
} from "../actionTypes/ActionTypes";

export const showChatSection = (data) => {
  return { type: SHOW_CHAT_SECTION, data };
};
export const hideChatSection = (data) => {
  return { type: HIDE_CHAT_SECTION, data };
};

export const setCurrentUser = (data) => {
  return { type: SET_CURRENT_USER, data };
};
