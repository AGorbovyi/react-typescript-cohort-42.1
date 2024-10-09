// // Условия проекта:

// // 1. Разместите на странице Input с label="Country", placeholder="Enter Country for searching universities", 
// // в который пользователь может ввести название страны для посика университетов

// // 2. Разместите на странице Button "Get Universities", по клику на которую, 
// // отправляется GET запрос на http://universities.hipolabs.com/search?country=COUNTRY_NAME

// // 3. Используйте для запросов fetch

// // 4. Если в ответе на запрос пришли нормальные данные (запрос выполнен успешно), 
// // то разместите данные в стейте, а затем отобразите на стрнице в виде карточек. Сохраняйте не более 15 объектов в массиве в стейт

// // 5. При повторном нажатии на кнопку "Get Universities", выполните новый GET запрос на http://universities.hipolabs.com/search?country=COUNTRY_NAME 
// // и получите новые данные, и обновите стейт

// // 6. При получении ошибки, положите в отдельный стейт данные об ошибке с соббщением "Some Network Error"

// // 7. Стили на ваше усмотрение, контент тоже на ваше усмотрение

// // 8. Все нужно делать в компоненте Lesson_10



// import Input from "components/Input/Input";
// import Button from "components/Button/Button";
// import { useState, useEffect } from "react";

// import { PageWrapper, Form, SearchField, ButtonComponent, Card } from "./styles"
// import { ButtonComponent } from "components/Button/styles";


function Lesson_10 () {

// const [uni, setUni] = useState<string | undefined>(undefined);
// const [error, setError] = useState<string | undefined>(undefined);

// const UNI_URL: string = "http://universities.hipolabs.com/search?country";


//     return(    
// <PageWrapper>
//   <Form>
//   <SearchField>
//     <Input />
//   </SearchField> 
//   <ButtonComponent>
// <Button />
//   </ButtonComponent>
//   <CardComponent></CardComponent>
//   </Form>
//   </PageWrapper>

}

export default Lesson_10;