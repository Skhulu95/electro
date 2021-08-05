import React, { useRef } from 'react';

import classes from './AddComment.module.css';

function AddComment(props) {
  const nameRef = useRef('');
  const commentTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const comment = {
      name: nameRef.current.value,
      commentText: commentTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddComment(comment);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='comment-text'>Comment</label>
        <textarea rows='5' id='comment-text' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Added Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button>Add Comment</button>
    </form>
  );
}

export default AddComment;
