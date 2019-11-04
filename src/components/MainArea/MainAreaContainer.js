import React from 'react'
import Segment from '../Segment/SegmentContainer'
import SegmentHeader from '../SegmentHeader/SegmentHeader'
import * as types from '../../store/itemTypes'
import * as style from './MainArea.module.css'
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
    {type: types.benefits},
    {type: types.advantages},
    {type: types.problemSolvings},
    {type: types.desires},
    {type: types.solutions},
    {type: types.tasks},
    {type: types.problems},
  ]

  let positions = [
    {id: 1, top: true},
    {id: 2, top: true},
    {id: 3, top: false},
    {id: 4, top: true},
    {id: 5, top: true},
    {id: 6, top: false},
    {id: 7, top: false},
  ];

  let childComponents = positions.map((elem, ind)=>{
    let header = <SegmentHeader
    key = {segmentTitles[ind].title}
    title = {segmentTitles[ind].title}
    helpText = {segmentTitles[ind].helpText} 
    />
    let content = <Segment 
    key={segments[ind].type}
    type={segments[ind].type}
    />

    return (<div key={elem.id} className={style["segment-wrapper"]}>
        {elem.top ? [header, content] : [content, header]}
    </div>)
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