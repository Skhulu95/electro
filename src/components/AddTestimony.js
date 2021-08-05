import React, { useRef } from 'react';

import classes from './AddTestimony.module.css';

function AddTestimony(props) {
  const nameRef = useRef('');
  const commentRef = useRef('');
  const dateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const testimony = {
      name: nameRef.current.value,
      comment: commentRef.current.value,
      date: dateRef.current.value,
    };

    props.onAddTestimony(testimony);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Comment</label>
        <textarea rows='5' id='opening-text' ref={commentRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Date</label>
        <input type='text' id='date' ref={dateRef} />
      </div>
      <button>Add Testimony</button>
    </form>
  );
}

export default AddTestimony;