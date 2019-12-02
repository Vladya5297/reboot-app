import React from 'react';
import Header from './Header/HeaderContainer';
import MainArea from './MainArea/MainAreaContainer';

const EditFormPage = (props) => {
    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column"
        }}>
            <Header />
            <MainArea />
        </div >
    )
}

export default EditFormPage;