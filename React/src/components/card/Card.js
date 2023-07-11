import React from "react";

const Cardproject = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{props.content}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export { Cardproject };
