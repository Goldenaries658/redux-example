import React, { Component } from "react";

export default class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Add post</h2>
        <form>
          <div>
            <label>Title:</label>
            <br />
            <input type="text" name="title" />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea name="body" cols="30" rows="3" />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
