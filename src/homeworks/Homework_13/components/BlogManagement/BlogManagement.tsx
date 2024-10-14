import { useState, ChangeEvent, createContext, FormEvent } from "react";

import { Textarea, Wrapper } from "./styles";
import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";

// шаг 1: создаем контекст через createContext
// Контекст - это хранилище данных, которые мы хотим передать в любой компонент на уровень ниже
export const BlogManagementContext = createContext<string>("");

function BlogManagement() {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onChangeTextAreaMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const postMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(textAreaValue);
  };

  console.log(message);

  return (
    //шаг 2: Обернуть все что в return с помощью BlogManagementContext.Provider и передать, то что мы хотим в value

    <BlogManagementContext.Provider value={message}>
      <Wrapper onSubmit={postMessage}>
        <Textarea
          name="message"
          value={textAreaValue}
          onChange={onChangeTextAreaMessage}
          placeholder="Enter message to post"
        />
        <Button name="Запостить" type="submit" />
        {!!message && <Card />}
      </Wrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
