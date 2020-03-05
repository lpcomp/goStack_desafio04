import React, { Component } from "react";
import "./style.css";

import Comment from "../Comment/index";

class Post extends Component {
  render() {
    const post = this.props.data;

    return (
      <div key={post.id} className="boxPost">
        <div className="postHeader">
          <img className="imgAvatarinfo" src={post.author.avatar} />
          <div className="boxHeaderInfo">
            <span className="namePostInfo">{post.author.name}</span>
            <span className="datePostInfo">{post.date}</span>
          </div>
        </div>
        <div className="postContent">
          <span>{post.content}</span>
        </div>
        <div className="boxComments">
          {post.comments.map(comment => (
            <Comment key={comment.id} data={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default Post;
