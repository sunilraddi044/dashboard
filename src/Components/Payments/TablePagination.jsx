import React from "react";
import "./TablePagination.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const productsGenerator = (quantity) => {
  const s = [
    <div>
      <small className="position-relative">
        <span class="position-absolute  translate-middle  status-color bg-primary border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span>
        <span className="position-absolute status-title ">Success</span>
      </small>
    </div>,
    <div>
      <small className="position-relative">
        <span class="position-absolute  translate-middle  status-color bg-secondary border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span>
        <span className="position-absolute status-title ">Proceed</span>
      </small>
    </div>,
    <div>
      <small className="position-relative">
        <span class="position-absolute  translate-middle  status-color bg-warning border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span>
        <span className="position-absolute status-title ">Hold</span>
      </small>
    </div>,
    <div>
      <small className="position-relative">
        <span class="position-absolute  translate-middle  status-color bg-danger border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span>
        <span className="position-absolute status-title ">Faild</span>
      </small>
    </div>,
  ];
  const items = [];
  let index = 0;
  for (let i = 0; i < quantity; i++) {
    if (index === s.length) index = 0;
    items.push({
      Status: s[index],
      amount: `45367${((i + 1) * 24) / 3}`,
      date: `${1 + i} July 2021`,
      details: (
        <button type="button" class="btn btn-outline-primary">
          Details
        </button>
      ),
    });
    index++;
  }
  return items;
};

const products = productsGenerator(100);

const columns = [
  {
    dataField: "Status",
    text: "Status",
  },
  {
    dataField: "amount",
    text: "Amount",
    sort: true,
  },
  {
    dataField: "date",
    text: "Date",
  },
  {
    dataField: "details",
  },
];

function rowStyleFormat(row, rowIdx) {
  return { backgroundColor: rowIdx === 1 ? "#aaa" : "" };
}

function TablePagination() {
  return (
    <div className="table-pagination">
      <BootstrapTable
        className=""
        trStyle={rowStyleFormat}
        rowStyle={{ backgroundColor: "#fff", border: "none" }}
        headerWrapperClasses="foo"
        rowStyleFormat
        bordered={false}
        classes="test"
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 3 })}
      />
    </div>
  );
}

export default TablePagination;
