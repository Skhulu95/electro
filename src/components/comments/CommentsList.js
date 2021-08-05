import React from 'react';

import Comment from './Comment';
import classes from './CommentsList.module.css';

const CommentList = (props) => {
  return (
    <ul className={classes['comments-list']} id="comments-list">
      {props.comments.map((comment) => (
        <Comment
          key={comment.id}
          title={comment.name}
          releaseDate={comment.releaseDate}
          openingText={comment.commentText}
        />
      ))}
    </ul>
  );
};

export default CommentList;