import React from "react";
import TablePagination from "../../Components/Payments/TablePagination";
import "./Payment.css";

function Payment() {
  return (
    <div className="col-8 p-3 me-auto rounded shadow bg-light payment-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-around flex-row">
            <h5 className="">Payment History</h5>
            <i class="bi ms-auto  bi-exclamation-circle"></i>
          </div>
          <hr />

          <div
            className="row gap-3 pt-5 pb-3 rounded  payment-type justify-content-around"
            style={{ backgroundColor: "#eee" }}
          >
            <div className="col-lg bg-light ">
              <img
                src={"/profile.jpg"}
                height={80}
                width={100}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg bg-light">mastercard</div>
            <div className="col-lg bg-light">amazonpay</div>
            <div className="col-lg bg-light">pay</div>
          </div>

          <div className="row gap-3 mt-3 rounded   justify-content-around">
            <div className="col-lg  bg-light ">
              <TablePagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
