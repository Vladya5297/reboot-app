import React from 'react'
import Segment from '../Segment/Segment'
import SegmentHeader from '../SegmentHeader/SegmentHeader'
import * as style from './MainArea.module.css'
import MainArea from './MainArea';

// Этот компонент был создан, чтобы разгрузить компонент MainArea
// Вынос логики из презентационного компонента - стандартная практика
// Позже перенесём исходные массивы в store
const MainAreaContainer = (props) => {
// создаём массив заголовков сегметов
  let segmentTitles = [
    {id: 1, title: 'Выгода', helpText: 'SampleText'},
    {id: 2, title: 'Преимущества', helpText: 'SampleText'},
    {id: 3, title: 'Как продукт решает проблему', helpText: 'SampleText'},
    {id: 4, title: 'Желания', helpText: 'SampleText'},
    {id: 5, title: 'Решения', helpText: 'SampleText'},
    {id: 6, title: 'Задачи', helpText: 'SampleText'},
    {id: 7, title: 'Проблемы', helpText: 'SampleText'},
  ];

  segmentTitles = segmentTitles.map((elem)=>{
    return (<SegmentHeader
     key={elem.id}
     title = {elem.title}
     helpText = {elem.helpText} />);
  });

  // создаём массив сегметов
  // id начинаются с восьмого во славу древних богов
  // иначе компилятор ругается, что айдишники совпадают с массивом заголовков
  // ДОПОЛНИТЬ НУЖНЫМИ ПОЛЯМИ
  let segments = [
    {id: 8, top: true},
    {id: 9, top: true},
    {id: 10, top: false},
    {id: 11, top: true},
    {id: 12, top: true},
    {id: 13, top: false},
    {id: 14, top: false},
  ];

  segments = segments.map((elem, ind)=>{
    return {
        id: ind,
        title: segmentTitles[ind],
        content: <Segment key={elem.id} />,
        top: elem.top
    }
  });

  // массив сегментов с позиционированными заголовками
  segments = segments.map((elem)=>{
      return (<div key={elem.id} className={style["segment-wrapper"]}>
          {elem.top ? [elem.title, elem.content] : [elem.content, elem.title]}
      </div>)
  });

  // прокидывание полученного в основной компонент
  // первый массив - в левую область, остальное - в правую
  return (
      <MainArea>
          {segments.slice(0, 3)}
          {segments.slice(3)}
      </MainArea>
  )
}

export default MainAreaContainer;