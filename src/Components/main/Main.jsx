import React, { Suspense } from "react";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";
import DashBoard from "../../Pages/DashBoard/DashBoard";

const Calender = React.lazy(() => import("../../Pages/Calender/Calender"));
const Messages = React.lazy(() => import("../../Pages/Messages/Messages"));
const Payment = React.lazy(() => import("../../Pages/Payments/Payment"));

/**
 * This function help to route between multiple pages where as topbar and side bar are static.
 */
function Main() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <div className="row ">
          <SideBar />
          <Suspense fallback={<p>Loading</p>}>
            <Switch>
              <Route exact path="/">
                <DashBoard />
              </Route>
              <Route exact path="/Dashboard">
                <DashBoard />
              </Route>
              <Route path="/Calender">
                <Calender />
              </Route>
              <Route path="/Messages">
                <Messages />
              </Route>
              <Route path="/Payments">
                <Payment />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default Main;
