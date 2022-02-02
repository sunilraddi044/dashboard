

import "./Messanger.css";
import Users from "./Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";

function Chat() {
  return (
    <Router>
      <div class="container-fluid">
        <div className="row ">
          <Users />
          <Switch>
            <Route exact path="/Messages/chats/:userId">
              <Chats />
            </Route>
          </Switch>

          {/* <Chats /> */}
        </div>
      </div>
    </Router>
  );
}

export default Chat;
