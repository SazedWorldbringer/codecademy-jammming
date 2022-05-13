import React from "react";
import "./Track.css";

class Track extends React.Component {
  renderAction() {}

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{}</h3>
          <p>{}</p>
        </div>
      </div>
    );
  }
}

export default Track;
