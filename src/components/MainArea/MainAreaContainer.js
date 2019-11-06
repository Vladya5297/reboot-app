import React from 'react'
import Segment from '../Segment/SegmentContainer'
import SegmentHeader from '../SegmentHeader/SegmentHeader'
import * as types from '../../store/itemTypes'
import MainArea from './MainArea';

// Этот компонент был создан, чтобы разгрузить компонент MainArea
// Вынос логики из презентационного компонента - стандартная практика
const MainAreaContainer = (props) => {
// создаём массив заголовков сегметов
  let segmentTitles = [
    {title: 'Выгода', helpText: 'SampleText'},
    {title: 'Преимущества', helpText: 'SampleText'},
    {title: 'Как продукт решает проблему', helpText: 'SampleText'},
    {title: 'Желания', helpText: '- Какие бизнес- задачи стоят перед клиентом?\n' +
          '- Что наиболее ценно для клиента  с точки зрения денег, времени и усилий?\n' +
          '- Какой уровень качества он ожидает получить?\n' +
          '- Какие выгоды клиент получает сейчас, когда пользуется тем что имеет?\n' +
          '- Как клиент измеряет успех или неудачу?'},
    {title: 'Решения', helpText: 'SampleText'},
    {title: 'Задачи', helpText: 'SampleText'},
    {title: 'Проблемы', helpText: 'SampleText'},
  ];

  // создаём массив сегметов
  // id начинаются с восьмого во славу древних богов
  // иначе компилятор ругается, что айдишники совпадают с массивом заголовков
  // ДОПОЛНИТЬ НУЖНЫМИ ПОЛЯМИ
  let segments = [
    {type: types.benefits, color: "#AFFFC7", slots: 4},
    {type: types.advantages, color: "#FF8BF0", slots: 4},
    {type: types.problemSolvings, color: "#AFE7FF", slots: 8},
    {type: types.desires, color: "#FA6980", slots: 4},
    {type: types.solutions, color: "#52E5BA", slots: 4},
    {type: types.tasks, color: "#72ACFF", slots: 4},
    {type: types.problems, color: "#FFC96C", slots: 4},
  ]

  let positions = [
    {id: 1, isOnTop: true},
    {id: 2, isOnTop: true},
    {id: 3, isOnTop: false},
    {id: 4, isOnTop: true},
    {id: 5, isOnTop: true},
    {id: 6, isOnTop: false},
    {id: 7, isOnTop: false},
  ];

  let childComponents = positions.map((elem, ind)=>{
      return (<Segment 
      key={segments[ind].type}
      type={segments[ind].type}
      color={segments[ind].color}
      slots={segments[ind].slots}
      isOnTop={elem.isOnTop}>
        <SegmentHeader
          key = {segmentTitles[ind].title}
          title = {segmentTitles[ind].title}
          helpText = {segmentTitles[ind].helpText} 
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