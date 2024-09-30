import { useEffect, useState } from "react";
import Input from "components/Input/Input";

import { PageWrapper, FormElementControl, Text, Card } from "./styles";
import Button from "components/Button/Button";

function Lesson_09() {
  const [inputValue, setInputValue] = useState<string>("");
  const [catFact, setCatFact] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const onChangeValue = (event: any) => {
    console.log(event);
    setInputValue(event.target.value);
  };

  // Lifecycle methods
  // 1. MOUNTING
  // UseEffect
  // useEffect(() => {
  //   console.log("MOUNTING!!!");
  // }, []);

  // // 2. UPDATING
  // useEffect(() => {
  //   console.log("UPDATING!!!");
  // }, [inputValue]);

  // // 3. UNMOUNTING
  // useEffect(() => {
  //   return () => {
  //     console.log("Unmounting");
  //   }
  // }, [inputValue]);

  const getCatFact = async () => {
    const response = await fetch("https://catfact.ninja/fact", {
      method: "GET",
    });

    console.log(response);
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      setCatFact(result.fact);
    } else {
      setError("Some Network Error!!!");
    }
  };

  return (
    <PageWrapper>
      {/* <input
        value={inputValue}
        onChange={onChangeValue}
        placeholder="Enter itme"
      /> */}
      <FormElementControl>
        <Input
          name="search"
          label="Search"
          placeholder="Enter something"
          id="input-search"
        />
      </FormElementControl>
      <FormElementControl>
        <Card>
         {catFact && <Text>{catFact}</Text>}
         {error && <Text>{error}</Text>}
          <Button name="Get Cat Fact" onClick={getCatFact} />
        </Card>
      </FormElementControl>
    </PageWrapper>
  );
}

export default Lesson_09;
