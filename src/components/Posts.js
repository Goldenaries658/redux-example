import React, { Component } from "react";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  async componentDidMount() {
    const data = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    this.setState({ posts: data });
  }
  render() {
    const postItems = this.state.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <hr />
      </div>
    ));
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        {postItems}
      </div>
    );
  }
}
