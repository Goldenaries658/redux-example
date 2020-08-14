import React, { Component } from "react";

export default class Postform extends Component {
  state = {
    title: "",
    body: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h2>Add post</h2>
        <form>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              cols="30"
              rows="3"
              value={body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
