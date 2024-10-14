import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { useFormik } from "formik";
import * as Yup from "yup";

import { EmployeeFormContainer, Title, InputContainer } from "./styles";

function EmployeeForm() {
  return (
    <EmployeeFormContainer>
      <Title>Contact Us</Title>
      <InputContainer>
        <Input id="" name="" placeholder="" label="Name*"/>
        <Input id="" name="" placeholder="" label="Surname*"/>
        <Input id="" name="" placeholder="" label="Age*"/>
        <Input id="" name="" placeholder="QA"label="Job Position"/>
      </InputContainer>
      <Button type="submit" name="Create" />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;