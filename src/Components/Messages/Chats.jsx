import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chats.css";
import { messages, messanger_users } from "../../Data/data";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideChatSection } from "../../redux/actions/Actions";

function Chats(props) {
  const displaychatStatus = useSelector(
    (state) => state.displayChat.displayChatSection
  );
  const { userId } = useParams();

  let convo = messages;
  const [conversation, setConversation] = useState(convo);
  useEffect(() => {
    messanger_users
      .filter((user) => user.id === userId)
      .map((user) => {
        return setConversation(user.convo);
      });
  }, [userId]);

  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const conversationHandler = () => {
    setConversation((prev) => [
      ...prev,
      {
        time: 10.5,
        text: inputText,
        type: "outgoing",
      },
    ]);
    setInputText("");
  };

  return (
    <div
      class={`col-lg-8 position-relative mt-2 chats bg-light ms-auto ${
        displaychatStatus ? "d-block" : ""
      }`}
    >
      <i
        onClick={() => dispatch(hideChatSection(false))}
        class="bi position-absolute bi-arrow-left-square "
      ></i>
      <div className="convo pt-5">
        {conversation.map((msg) =>
          msg.type === "outgoing" ? (
            <p
              align="right"
              className={` ${
                msg.type === "incoming" ? "incoming" : "outgoing"
              } rounded p-1 px-3 d-block`}
            >
              {msg.text}
            </p>
          ) : (
            <p
              align="left"
              className={` ${
                msg.type === "incoming" ? "incoming" : "outgoing"
              } rounded p-1 px-3 d-block`}
            >
              {msg.text}
            </p>
          )
        )}
      </div>
      <div class="input-group msg-input mb-3">
        <input
          onChange={onChangeHandler}
          value={inputText}
          type="text"
          className="form-control shadow-none convo-input"
          placeholder="Start typing here"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          onClick={conversationHandler}
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chats;
