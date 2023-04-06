import React from "react";

export default function Alerts(props) {
  return (
    <div style={{ height: "3.5rem" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{props.alert.msg}</strong>
        </div>
      )}
    </div>
  );
}
