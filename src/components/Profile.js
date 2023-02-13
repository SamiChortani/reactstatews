import React, { Component } from "react";
import img01 from "../img01.png";
export default class Person extends Component {
  state = {
    imgSrc: img01,
    fullName: "Mnasri Amara",
    bio: "Now I'm  studying web developer skills",
    profession: " Web developper",
    
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "ButtonFace",
          border: "outset 13px linen",
          boxShadow: "2px 2px 20px 23px #7fecad",
          width: "550px",
          margin: "20px auto ",
        }}  >
        <img
          src={this.state.imgSrc}
          alt="Photo Profile"
          style={{
            width: 325,
            height: 325,
            borderRadius: "50%",
            boxShadow: "1px 2px 15px 13px silver",
          }}
        />
        <h1> {this.state.fullName}</h1>
        <h2>{this.state.profession}</h2>
        <h4>{this.state.bio}</h4>
      </div>
    );
  }
}
