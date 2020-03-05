import React, { Component } from "react";
import "./style.css";

class Comment extends Component {
  render() {
    const comment = this.props.data;

    return (
      <div key={comment.id} className="comment">
        <img className="imgAvatarinfo" src={comment.author.avatar} />
        <div className="commentTxt">
          <span className="commentName">{comment.author.name}</span>
          <span className="commentContent">{comment.content}</span>
        </div>
      </div>
    );
  }
}

export default Comment;
