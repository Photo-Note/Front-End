import React from "react";
import "../styles/dashboard.scss";

function Tab(props) {
  let classNameValue = "tab";
  if (props.tab === props.selectedTab) {
    classNameValue = "tab active-tab";
  }
  return (
    <div
      className={classNameValue}
      onClick={() => {
        props.onClick(props.tab);
      }}
    >
      {props.tab}
    </div>
  );
}

export default Tab;
