import React from 'react'
import { withRouter } from "react-router";
import * as fields from '../../store/routes'
import timeline1 from '../../icons/timeline1.svg'
import timeline2 from '../../icons/timeline2.svg'

const TimeLine = (props) => {
    console.log(props);
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            position: "relative"
        }}>
            <div style={{
                position: "absolute",
                height: "100%",
                width: "100px",
                left: "-10px",
                cursor: "pointer"
            }}
            onClick={()=>props.history.goBack()}/>
            <img src={
                (props.match.path === fields.main && timeline1) ||
                (props.match.path === fields.editForm && timeline2)
            } alt="timeline" />
        </div>
    )
}

export default withRouter(TimeLine);