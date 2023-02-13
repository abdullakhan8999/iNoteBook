import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "40px", marginTop: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong className="text-capitalize">{props.alert.type}</strong>:
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
