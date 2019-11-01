import React from 'react'
import Segment from '../Segment/Segment'
import SegmentHeader from '../SegmentHeader/SegmentHeader'
import * as style from './MainArea.module.css'
import MainArea from './MainArea';

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
  // ДОПОЛНИТЬ НУЖНЫМИ ПОЛЯМИ
  let segments = [
    {id: 1, top: true},
    {id: 2, top: true},
    {id: 3, top: false},
    {id: 4, top: true},
    {id: 5, top: true},
    {id: 6, top: false},
    {id: 7, top: false},
  ];

  segments = segments.map((elem, ind)=>{
    return {
        title: segmentTitles[ind],
        content: <Segment key={elem.id} />,
        top: elem.top
    }
  });

  // массив сегментов с позиционированными заголовками
  segments = segments.map((elem)=>{
      return (<div className={style["segment-wrapper"]}>
          {elem.top ? [elem.title, elem.content] : [elem.content, elem.title]}
      </div>)
  });

  // прокидывание полученного в основной компонент
  return (
      <MainArea segmentsNumLeft="3">
          {segments}
      </MainArea>
  )
}

export default MainAreaContainer;