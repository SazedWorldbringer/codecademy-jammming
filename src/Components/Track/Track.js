import React from "react";
import "./Track.css";

let isRemoval = true;

class Track extends React.Component {
  renderAction() {
    return <button class="Track-action">{isRemoval ? "-" : "+"}</button>;
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{props.name}</h3>
          <p>{`${props.artist} | ${props.album}`}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
