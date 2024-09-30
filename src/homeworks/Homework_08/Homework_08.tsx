import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, ButtonControl } from "./styles";

function Homework_08() {
  return;
  <PageWrapper>
    <ButtonControl>
      <Button
        disabled={false}
        name="Disable Button"
        onClick={() => {
          console.log("I am Simple button");
        }}
      />
    </ButtonControl>
    <ButtonControl>
      <Button
        isDeleteVariant={true}
        name="Disable Button"
        onClick={() => {
          console.log("I am Delete button");
        }}
      />
    </ButtonControl>
    <ButtonControl>
      <Button
        disabled={true}
        name="Disable Button"
        onClick={() => {
          console.log("I am Disable button");
        }}
      />
    </ButtonControl>
    <ButtonControl>
      <Input
        id="input-simple"
        name="simpleInput"
        placeholder="Enter something"
        label="Simple input"
      />
    </ButtonControl>
    <ButtonControl>
      <Input
        id="input-simple"
        name="simpleInput"
        placeholder="Enter something"
        label="Simple input"
      />
    </ButtonControl>
    <ButtonControl>
      <Input
        id="input-simple"
        name="simpleInput"
        placeholder="Enter something"
        label="Simple input"
      />
    </ButtonControl>
  </PageWrapper>;
}

export default Homework_08;
