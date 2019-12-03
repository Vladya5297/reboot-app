import React from 'react'
import classes from './SideMenu.module.css'
import { RadioGroup, RadioButton } from 'react-custom-radio';
import fieldsProps from '../../store/formFields'


const SideMenu = (props) => {
    const [value, setValue] = React.useState(props.children[0]);
    const changeHandler = (value) => {
        props.changeHandler && props.changeHandler(value);
        setValue(value);
    }
    const radio = props.children.map(elem => {
        const classList = [
            classes.radio,
            value === elem && classes.checked
        ].join(" ");
        return (
            <RadioButton
                key={elem}
                value={elem}
                className={classList}
            >
                {fieldsProps[elem].header}
            </RadioButton>)
    });
    const classList = [
        classes.wrapper,
        props.disabled && classes.disabled
    ].join(" ");
    return (
        <div className={classList}>
            <RadioGroup
                name={props.name}
                selectedValue={value}
                onChange={changeHandler}>
                {radio}
            </RadioGroup>
        </div>
    )
}

export default SideMenu;