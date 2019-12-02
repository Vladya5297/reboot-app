import React from 'react'
import style from './MainArea.module.css'
import SideMenu from '../../../components/SideMenu/SideMenu'

const MainArea = (props) => {
  return (
    <div className={style.main}>
      <SideMenu />      
    </div>
  );
}

export default MainArea;