import React from 'react'
import Segment from '../Segment/SegmentContainer'
import SegmentHeader from '../SegmentHeader/SegmentHeader'
import * as types from '../../store/itemTypes'
import MainArea from './MainArea';

// Этот компонент был создан, чтобы разгрузить компонент MainArea
// Вынос логики из презентационного компонента - стандартная практика
const MainAreaContainer = (props) => {
  let segments = [
    {id: 1, isOnTop: true, type: types.benefits, slots: 4},
    {id: 2, isOnTop: true, type: types.advantages, slots: 4},
    {id: 3, isOnTop: false, type: types.problemSolvings, slots: 8},
    {id: 4, isOnTop: true, type: types.desires, slots: 4},
    {id: 5, isOnTop: true, type: types.solutions, slots: 4},
    {id: 6, isOnTop: false, type: types.tasks, slots: 4},
    {id: 7, isOnTop: false, type: types.problems, slots: 4},
  ]

  let childComponents = segments.map((elem, ind)=>{
      return (<Segment 
      key={elem.type}
      type={elem.type}
      slots={elem.slots}
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