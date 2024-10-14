import { useContext } from "react";

import { BlogManagementContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";

import { MessageWrapper, MessageTitle, MessageText } from "./styles";

function Message() {
  // шаг 3: получить данные из контекста
  const message = useContext(BlogManagementContext);

  return (
    <MessageWrapper>
      <MessageTitle>Message:</MessageTitle>
      <MessageText>{message}</MessageText>
    </MessageWrapper>
  );
}

export default Message;
