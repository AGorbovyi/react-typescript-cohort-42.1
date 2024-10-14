import Message from "homeworks/Homework_13/components/Message/Message";

import { CardWrapper, NameTitle } from "./styles";
import { UserData } from "./types";

// Предположим, что вы получили данные пользователя в константе userResponse, используя GET запрос по сети
const userInfo: UserData = {
  firstName: "Anton",
  lastName: "Gorbovyi"
};

function Card() {
  return (
    <CardWrapper>
      <NameTitle>{userInfo.firstName} {userInfo.lastName}</NameTitle>
      <Message />
    </CardWrapper>
  );
}

export default Card;
