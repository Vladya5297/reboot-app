import React from 'react'
import classes from './MainArea.module.css'
import SideMenu from '../../../components/SideMenu/SideMenu'
import TextArea from '../../../components/TextArea/TextArea'
import * as fields from '../../../store/formFields'
import editIcon from '../../../icons/iconsSVG/EditIcon.svg'
import closeIcon from '../../../icons/iconsSVG/CloseIcon.svg'

const MainArea = (props) => {
  const value = props.value;
  const [editMode, toggleEditMode] = React.useState(false);
  const editWindow =
    <div className={classes["edit-window"]}>
      <TextArea
        value={value}
        onChange={(text) => props.changeFieldText(props.currentField, text)} />
      <div className={classes["edit-button"]}
        style={{ backgroundImage: `url(${closeIcon})` }}
        onClick={() => { toggleEditMode(false); }} />
    </div>
  return (
    <div className={classes.main}>
      <SideMenu name="form-fields"
        changeHandler={props.changeField}
        disabled={editMode}>
        {fields.client}
        {fields.problems}
        {fields.idea}
        {fields.advantages}
        {fields.model}
      </SideMenu>
      <div className={classes.wrapper}>
        <span className={classes.tip}>Описание твоей идеи было собрано и сведено ниже. Ты можешь оставить формулировку идеи такой или отредактировать, чтобы донести суть и ценность твоей идеи.</span>
        <strong className={classes.theme}>{props.theme}</strong>
        <div className={classes["edit-form"]} style={{ overflow: editMode ? "hidden" : "auto" }}>
          <div className={classes["edit-button"]}
            style={{ backgroundImage: `url(${editIcon})` }}
            onClick={() => { toggleEditMode(true) }} />
          {value}
          {editMode && editWindow}
        </div>
      </div>
    </div>
  );
}

export default MainArea;