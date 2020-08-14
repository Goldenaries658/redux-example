import React, { Component } from 'react';

export default class Postform extends Component {
  state = {
    title: '',
    body: '',
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { title, body } = this.state;

    const post = {
      title,
      body,
    };

    // Posting to a dummy API
    const data = await (
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(post),
      })
    ).json();
    console.log(data);
  };
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h2>Add post</h2>
        <form onSubmit={this.onSubmit}>
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
