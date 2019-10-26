import React from 'react';
import * as style from './AddButton.module.css';

const AddButton = (props) => {
  return (
    <div className={style.wrapper}>
      <span className={style.plus}></span>
    </div>
  )
}

export default AddButton;
