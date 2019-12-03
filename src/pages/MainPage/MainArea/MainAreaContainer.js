import React from 'react'
import Segment from '../../../components/Segment/SegmentContainer'
import SegmentHeader from '../../../components/SegmentHeader/SegmentHeader'
import * as types from '../../../store/itemTypes'
import MainArea from './MainArea';

// Этот компонент был создан, чтобы разгрузить компонент MainArea
// Вынос логики из презентационного компонента - стандартная практика
const MainAreaContainer = (props) => {
  let segments = [
    {id: 1, isOnTop: true, type: types.benefits},
    {id: 2, isOnTop: true, type: types.advantages},
    {id: 3, isOnTop: false, type: types.problemSolvings},
    {id: 4, isOnTop: true, type: types.desires},
    {id: 5, isOnTop: true, type: types.problems},
    {id: 6, isOnTop: false, type: types.solutions},
    {id: 7, isOnTop: false, type: types.tasks},
  ]

  let childComponents = segments.map((elem, ind)=>{
      return (<Segment 
      key={elem.type}
      type={elem.type}
      isOnTop={elem.isOnTop}>
        <SegmentHeader
          key={elem.id}
          type={elem.type}
        />
      </Segment>)
});

  // прокидывание полученного в основной компонент
  // первый массив - в левую область, остальное - в правую
  return (
      <MainArea>
          {childComponents.slice(0, 3)}
          {childComponents.slice(3)}
      </MainArea>
  )
}

export default MainAreaContainer;