import React from 'react'
import classes from './MainArea.module.css'
import TextArea from '../../../components/TextArea/TextArea'

const MainArea = (props) => {
  return (
    <div className={classes.main}>

      <div className={classes["work-area-wrapper"]}>
        <div className={classes.title}>ВАШ ПРОДУКТ</div>
        <div className={classes["work-area"]}>
          {props.children[0]}
        </div>
      </div>

      <div className={classes["theme-field"]}>
        <TextArea 
          placeholder={"Введите название идеи"}
          maxLength={42}
          value={props.value}
          onChange={(theme) => { props.changeTheme(theme) }}
        />
      </div>

      <div className={classes["work-area-wrapper"]}>
        <div className={classes.title}>ВАШ КЛИЕНТ</div>
        <div className={classes["work-area"]}>
          {props.children[1]}
        </div>
      </div>

    </div>
  );
}

export default MainArea;