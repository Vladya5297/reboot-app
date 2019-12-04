import React from 'react';
import './TextArea.css'

const TextArea = (props) => {
  // Используем хук состояния, чтобы сделать компонент управляемым
  const [text, setText] = React.useState(props.value);
  // Обработчик событий
  const handleChange = (event) => {
    // Обновляем состояние
    setText(event.target.value);
    // Если обработчик передан - вызываем его
    props.onChange &&
      props.onChange(event.target.value);
  };
  return (
    <textarea
      placeholder={props.placeholder}
      value={text}
      onChange={handleChange}
      maxLength={props.maxLength}
      disabled={props.disabled} />
  );
};

export default TextArea;
