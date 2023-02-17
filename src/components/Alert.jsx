import React from "react";
import "./Alert.css";

export default function Alert(props) {
  return (
    <div className="media">
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong className="">{props.alert.msg}</strong>
        </div>
      )}
    </div>
  );
}
