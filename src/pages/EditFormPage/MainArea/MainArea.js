import React from 'react'
import classes from './MainArea.module.css'
import SideMenu from '../../../components/SideMenu/SideMenu'
import * as fields from '../../../store/formFields'

const MainArea = (props) => {
  return (
    <div className={classes.main}>
      <SideMenu name="form-fields"
        changeHandler={props.changeField}>
        {fields.client}
        {fields.problems}
        {fields.idea}
        {fields.advantages}
        {fields.model}
      </SideMenu>
      <div className={classes.wrapper}>
        <span className={classes.tip}>Описание твоей идеи было собрано и сведено ниже. Ты можешь оставить формулировку идеи такой или отредактировать, чтобы донести суть и ценность твоей идеи.</span>
        <textarea className={classes["edit-form"]} value={props.value} />
      </div>
    </div>
  );
}

export default MainArea;