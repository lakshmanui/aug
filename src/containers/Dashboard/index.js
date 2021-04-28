import React, { useState } from "react";
import "./Dashboard.css";
import Modal from "@material-ui/core/Modal";
const CATEGORIES = [
  {
    type: "Top",
    list: [
      {
        name: "Top 10",
        selected: true,
      },
      {
        name: "Top 20",
        selected: false,
      },
      {
        name: "Top 30",
        selected: false,
      },
    ],
  },
  {
    type: "Money",
    list: [
      {
        name: "Smart Money",
        selected: true,
      },
      {
        name: "Whales",
        selected: false,
      },
      {
        name: "Exchanges",
        selected: false,
      },
    ],
  },
  {
    type: "Buy",
    list: [
      {
        name: "Bought",
        selected: true,
      },
      {
        name: "Sold",
        selected: false,
      },
      {
        name: "Held",
        selected: false,
      },
    ],
  },
  {
    type: "Hours",
    list: [
      {
        name: "24 Hours",
        selected: true,
      },
      {
        name: "1 Week",
        selected: false,
      },
      {
        name: "1 Month",
        selected: false,
      },
    ],
  },
];
function Dashboard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="dashboard">
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="metamask-wrapper">
        <div className="metamask-img"><img src="/images/metamask.svg" /></div>
          <h2 id="modal-title" className="metamask-title"> MetaMask</h2>
          <p id="modal-description" className="metamask-desc">Connect with Metamask in your Browser</p>
        </div>
      </Modal>

      <div className="title-wrapper">
        <b>Top 10</b> Tokens <b>Smart Money</b> has Bought in the last{" "}
        <b>24 Hours</b>
      </div>
      <div className="content">
        {CATEGORIES.map((category, i) => {
          return (
            <div className="category" key={i}>
              {category.list.map((listIem, listIndex) => {
                return (
                  <div
                    className={`category-item ${
                      listIem.selected ? "selected" : ""
                    }`}
                    key={listIndex}
                  >
                    {listIem.name}
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className={"category-item selected apply-btn"}>Apply</div>
      </div>
      <div className="connect-wallet">
        <div className="connect-wallet-btn" onClick={handleOpen}>
          Connect Wallet To Continue
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
