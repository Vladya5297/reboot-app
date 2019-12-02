import React from 'react'
import MainArea from './MainArea';

// Этот компонент был создан, чтобы разгрузить компонент MainArea
// Вынос логики из презентационного компонента - стандартная практика
const MainAreaContainer = (props) => {
  return (
      <MainArea>
      </MainArea>
  )
}

export default MainAreaContainer;