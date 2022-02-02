import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { messanger_users } from "../../Data/data";
import { showChatSection } from "../../redux/actions/Actions";
import "./Users.css";

function Users() {
  const displayChat = useSelector(
    (state) => state.displayChat.displayChatSection
  );
  const dispatch = useDispatch();

  const [searchItem, setSearchItem] = useState("");

  const displayChatHandler = () => {
    dispatch(showChatSection(true));
  };

  const onChangeHandler = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div
      class={`col-lg-4  users bg-light me-auto ${
        displayChat ? "hide-user" : ""
      }`}
    >
      <div class="input-group flex-nowrap">
        <span class="" id="addon-wrapping">
          <i class="bi fa-rotate-90 bg-transparent bi-search"></i>
        </span>
        <input
          onChange={onChangeHandler}
          type="text"
          class=" search"
          placeholder="Find contacts"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>

      <ul class="list-unstyled  chat-list mt-2 mb-0">
        {messanger_users
          .filter((val) => {
            if (searchItem === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => (
            <Link className="router-links" to={`/Messages/chats/${val.id}`}>
              <li
                onClick={displayChatHandler}
                key={val.id}
                id={val.id}
                className="d-flex align-items-center gap-2 flex-row"
              >
                <img src={val.img} alt="avatar" />
                <div class="about">
                  <div class="name">{val.name}</div>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default Users;
