import React from 'react';

import classes from './Testimony.module.css';

const Testimony = (props) => {
  return (
    <li className={classes.testimony}>
      <h2>{props.name}</h2>
      <h3>{props.date}</h3>
      <p>{props.comment}</p>
    </li>
  );
};

export default Testimony;