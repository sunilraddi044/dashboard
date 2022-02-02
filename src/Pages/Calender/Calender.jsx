import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 1, 4),
    end: new Date(2022, 1, 7),
  },
  {
    title: "Vacation",
    start: new Date(2022, 1, 7),
    end: new Date(2022, 1, 10),
  },
  {
    title: "Conference",
    start: new Date(2022, 2, 20),
    end: new Date(2022, 2, 23),
  },
];

function Calender() {
  return (
    <div className="col-8 py-2  me-auto rounded shadow bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-between">
            <h5>Calender</h5>
            <h5>
              <i class="bi bi-exclamation-circle bg-light"></i>
            </h5>
          </div>
          <hr />
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 350, margin: "50px" }}
      />
    </div>
  );
}

export default Calender;
