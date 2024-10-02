// Создайте компонент Homework_09. В нем вам нужно будет сделать следующее:

// 1. при монтировании компонента Homework_09, сделайте get запрос на api сервис: https://official-joke-api.appspot.com/random_joke
// Если запрос выполниться успешно, то положите данные со случайными шутками в state и отобразите их(желателно красиво) в карточке.
// Если запрос выполнится с ошибкой, создайте стейт с ошибкой и положите туда строку "Error during request"
// 2. добавьте на страницу кнопку, при клике на которую выполняется новый запрос на https://official-joke-api.appspot.com/random_joke
// и при отвтете обновляется стейт с ошибкой или стейтом с полученными данными
// 3. стили на ваши усмотрение

import { useState, useEffect } from "react";
import { PageWrapper, Card, Text, ContainerJokes } from "./styles";
import Button from "components/Button/Button";

function Homework_09() {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const getJokes = async () => {
    const response = await fetch(JOKE_URL, { method: "GET" });

    const result = await response.json();

    if (response.ok) {
      setJoke(`${result.setup} ${result.punchline}`);
      // Тут выполняем действия, когда нам пришли ожидаемые данные(не ошибка!)
    } else {
      setError("Error during request");
      // Тут выполняем действия, когда нам пришла ошибка
    }
  };

useEffect(() => {getJokes();}, []);

  return (
    <PageWrapper>
      <Card>
        <ContainerJokes>
          {joke && <Text>{joke}</Text>}
          {error && <Text>{error}</Text>}
        </ContainerJokes>
        <Button name="Get new joke" onClick={getJokes} />
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;
